import * as jose from "jose";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if(req.method === "GET"){
        const bearerToken = req.headers.authorization;
        if(!bearerToken) res.status(401).json({errMsg: 'Unauthorized'})

        const token = bearerToken?.split(" ")[1] as string; 
        if(!token) res.status(401).json({errMsg: 'Unauthorized'})

        const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_SECRET);
        const tokenVerify = await jose.jwtVerify(token, secret).catch(err => err);

        if(!tokenVerify.payload) res.status(401).json({errMsg: tokenVerify.code})

        const payloadEmail = tokenVerify.payload.email;

        const user = await getDoc(doc(db, "users", payloadEmail));
        if(!user.exists()) return res.status(500).json({errMsg: "User does not exist."})
    
        const userData = user.data();

        return res.status(200).json({
            id: user.id,
            firstName: userData.firstName, 
            lastName: userData.lastName, 
            username: userData.username, 
            email: userData.email, 
            gender: userData.gender,
            userImg: userData.userImg
        })
    }
    return res.status(500).json({errMsg: 'Need a get request instead'})
}