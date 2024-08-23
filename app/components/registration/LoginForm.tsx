'use client'

import useAuthHook from "@/app/utils/useAuthHook";
import { useGlobalContext } from "@/app/context";
import { FormEvent, ChangeEvent, useState, useEffect } from "react";

const LoginForm = () => {
    const { loading, error } = useGlobalContext();
    const { loginFunc, registerFunc } = useAuthHook();
    const [login, setLogin] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        gender: 'male'
    });

    const handleChange = (e:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setValues({...values, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { firstName, lastName, username, email, password, gender } = values;
        if (login)
          loginFunc({
            email: email.trim(),
            password: password.trim(),
          });
        else
          registerFunc({
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            username: username.trim(),
            email: email.trim(),
            password: password.trim(),
            gender: gender.trim()
          });
    }
    const handleDummyLogin = () => {
        loginFunc({
            email: "dummy@dummy.com",
            password: "Bojan123",
        });
    }

    useEffect(() => {
        const { firstName, lastName, username, email, password } = values;
        if(login){
            if(!email.trim() || !password.trim()) return setDisabled(true);
            else return setDisabled(false);
        } else {
            if(!email.trim() || !password.trim() || !firstName.trim() || !lastName.trim() || !username.trim()) return setDisabled(true);
            else return setDisabled(false);
        }
    }, [values, login])

    return (  
        <form className="px-4 py-6 rounded shadow-lg shadow-blue-200 mt-6 w-full max-w-[480px] space-y-4 dark:bg-gray-700 dark:shadow-sky-700" onSubmit={handleSubmit}>
            <h3 className="text-center mb-4 dark:text-twitterTextDarkmode">{login ? 'Login' : "Sign Up"}</h3>

            {!login && <>    
                <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <input type="text" name="firstName" value={values.firstName} placeholder="First name..." onChange={handleChange} className="form-input w-full" />
                    <input type="text" name="lastName" value={values.lastName} placeholder="Last name..." onChange={handleChange} className="form-input w-full" />
                </div>

                <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <input type="text" name="username" value={values.username} placeholder="Username..." onChange={handleChange} maxLength={24} className="form-input w-full" />
                    <select name="gender" value={values.gender} onChange={handleChange} className="form-input w-full sm:w-[40%]">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
            </>
            }

            <input type="email" name="email" value={values.email} placeholder="email@address.com" onChange={handleChange} className="form-input w-full" />
            <input type="password" name="password" value={values.password} placeholder="Password..." onChange={handleChange} className="form-input w-full" />

            <div className="flex flex-col items-center space-y-4">
                {error && <p className="text-sm text-center text-red-500">{error}</p>}

                <button type="submit" className="btn btn-s btn-prim sm:btn-m disabled:disabled-btn" disabled={disabled || loading}>
                    {loading ? <div className="loading loading-form-resp"></div> : 'Submit'}
                </button>

                {login && <button type="button" className="btn btn-s btn-prim sm:btn-m" onClick={handleDummyLogin}>Use Dummy Account</button>}
                
                <p className="text-sm text-center select-none">
                    <span className="dark:text-twitterTextDarkmode">{login ? "Don't have an account? " : "Already have an account? "}</span>
                    <span onClick={() => setLogin(!login)} className="text-blue-400 cursor-pointer hover:underline">{login ? "Sign Up" : "Log In"}</span>
                    .
                </p>
            </div>
        </form>
    );
}
 
export default LoginForm;