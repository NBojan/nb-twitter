'use client'

import axios from "axios";
import { tokenLoginUrl } from "./utils/helpingHand";
import { AppLoading, LoginPage } from "./components";
import { deleteCookie, getCookie,  } from "cookies-next";
import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [authState, setAuthState] = useState({ user: null, loading: false, error: null, appLoading: true });
    
    const [tweetModal, setTweetModal] = useState({open: false, profilePic: false});
    const [sidebarModal, setSidebarModal] = useState(false);
    const [commentModal, setCommentModal] = useState({open: false, postId: '', firstName: '', lastName: '', username: '', userImg: '', postImage: '', text: '', timestamp: '' });
    const closeCommentModal = () => setCommentModal({open: false, postId: '', firstName: '', lastName: '', username: '', userImg: '', postImage: '', text: '', timestamp: '' });
    
    const [theme, setTheme] = useState("light");
    const [mounted, setMounted] = useState(false);
    const toggleTheme = () => {
        if(theme === "light") return setTheme("dark");
        else return setTheme("light");
    }
    
    const signOut = () => {
        deleteCookie("jwtTwitter");
        closeCommentModal();
        setSidebarModal(false);
        setTweetModal({open: false, profilePic: false});
        setAuthState({ user: null, loading: false, error: null, appLoading: false });
    }

    const tokenLogin = async () => {
        setAuthState({ user: null, loading: false, error: null, appLoading: true });

        const jwt = getCookie('jwtTwitter');
        if(!jwt) return setAuthState({ user: null, loading: false, error: null, appLoading: false });
        else {
            const response = await axios(tokenLoginUrl, {
                headers: {
                    Authorization: `Bearer ${jwt}`
                }
            }).catch(err => setAuthState({ user: null, loading: false, error: err.response.data.errMsg, appLoading: false }));
           
            if(response && response.data) {
                setAuthState({ user: response.data, loading: false, error: null, appLoading: false });
            }
        }
    }

    useEffect(() => {
        tokenLogin()
    }, [])
    
    useEffect(() => {
        if(!mounted){
            setTheme(localStorage.getItem("twitterTheme") || "light");
            return setMounted(true);
        }
        localStorage.setItem("twitterTheme", theme);
        if(theme === "dark") document.documentElement.classList.add("dark");
        else document.documentElement.classList.remove("dark");
    }, [theme])

    if(authState.appLoading) return <AppContext.Provider  value={{ theme }}><AppLoading /></AppContext.Provider>
    if(!authState.user) return <AppContext.Provider value={{ ...authState, setAuthState }}><LoginPage /></AppContext.Provider>
    return (
        <AppContext.Provider value={{ ...authState, setAuthState, commentModal, setCommentModal, closeCommentModal, tweetModal, setTweetModal, signOut, sidebarModal, setSidebarModal, theme, toggleTheme }}>
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext }