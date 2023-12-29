import bcrypt from "bcrypt";
import * as jose from "jose";
import validator from "validator";
import { db } from "@/firebase";
import { setCookie } from "cookies-next";
import { doc, getDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method === "POST"){
        const { email, password } = req.body;
        if(!email || !password ) return res.status(500).json({errMsg: 'Missing data'});

        const possibleErrors = [] as string[];
        const validationScheme = [
            {
                valid: validator.isEmail(email),
                errMsg: 'Invalid email'
            },
            {
                valid: validator.isLength(password, { min: 8 }),
                errMsg: 'Invalid password. Min. 8 charachters, at least 1 lowercase, 1 uppercase and 1 number.'
            },
        ] 
        validationScheme.forEach(value => {
            if(!value.valid) return possibleErrors.push(value.errMsg);
        })

        if(possibleErrors.length > 0) return res.status(500).json({errMsg: possibleErrors[0]});

        const userWithEmail = await getDoc(doc(db, 'users', email));
        if(!userWithEmail.exists()) return res.status(500).json({errMsg: 'Invalid email or password'});

        const userWithEmailData = userWithEmail.data();

        const matchingPassword = await bcrypt.compare(password, userWithEmailData.password);
        if(!matchingPassword) return res.status(500).json({errMsg: 'Invalid email or password'});

        const alg = "HS256";
        const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_SECRET);
        const jwt = await new jose.SignJWT({ email: userWithEmail.id }).setProtectedHeader({ alg }).setExpirationTime('48h').sign(secret);

        setCookie('jwtTwitter', jwt, { req, res, maxAge: 60 * 60 * 48 });

        return res.status(200).json({
            id: userWithEmail.id,
            firstName: userWithEmailData.firstName, 
            lastName: userWithEmailData.lastName, 
            username: userWithEmailData.username, 
            email: userWithEmailData.email, 
            gender: userWithEmailData.gender,
            userImg: userWithEmailData.userImg
        })    
    }

    return res.status(500).json({errMsg: 'Need a post request instead'})
}