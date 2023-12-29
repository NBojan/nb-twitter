'use client'

import axios from "axios";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../context";
import { loginUrl, registerUrl } from "./helpingHand";

const useAuthHook = () => {
    const router = useRouter();
    const { setAuthState } = useGlobalContext();

    const loginFunc = async (loginInfo: {email: string, password: string}) => {
        setAuthState({user: null, loading: true, error: null, appLoading: false});

        const response = await axios.post(loginUrl, loginInfo)
        .catch(err => setAuthState({ user: null, loading: false, error: err.response.data.errMsg, appLoading: false }))

        if(response && response.data) {
            setAuthState({ user: response.data, loading: false, error: null, appLoading: false });
            return router.push('/');
        }
    }

    const registerFunc = async (registerInfo: {
      firstName: string;
      lastName: string;
      username: string;
      email: string;
      password: string;
      gender: string;
    }) => {
      setAuthState({ user: null, loading: true, error: null, appLoading: false });

      const response = await axios.post(registerUrl, registerInfo)
      .catch(err => setAuthState({ user: null, loading: false, error: err.response.data.errMsg, appLoading: false }))

      if(response && response.data) {
        setAuthState({ user: response.data, loading: false, error: null, appLoading: false })
        return router.push('/');
      }
    };

    return { loginFunc, registerFunc }
}
 
export default useAuthHook;