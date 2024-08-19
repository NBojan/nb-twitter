"use client"

import Image from "next/image";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { useGlobalContext } from "@/app/context";

const UserProfile = () => {
    const { user, signOut, setTweetModal } = useGlobalContext();
    const [menu, setMenu] = useState(false);
    const openProfilePicModal = () => {
        setTweetModal({open:true, profilePic:true});
        setMenu(false);
    }
    
    return (
        <div className="relative userProfile">
            <div className="flex items-center justify-center rounded-full xl:justify-between xl:p-3 xl:hover:bg-gray-100 transition xl:dark:hover:bg-gray-700 cursor-default" onClick={() => setMenu(!menu)}>
                <div className="flex space-x-2 rounded-full xl:rounded-none p-1.5 xl:p-0 hover:bg-blue-100 dark:hover:bg-sky-900 xl:hover:bg-transparent dark:xl:hover:bg-transparent transition">
                    <Image src={user.userImg} width={48} height={48} alt="UserImg" className="rounded-full w-[48px] h-[48px]" />

                    <div className="hidden xl:block font-semibold tracking-wide">
                        <p className="line-clamp-1 theme-gray700-white">{user.firstName} {user.lastName}</p>
                        <p className="line-clamp-1 theme-gray500-gray400">@{user.username}</p>
                    </div>
                </div>

                <p className="hidden xl:block dark:text-twitterTextDarkmode"><BsThreeDots /></p>
            </div>

            {menu && (
                <div className="absolute rounded border bg-gray-100 bottom-full w-full">
                    <button className="block w-full p-1.5 border-b border-gray-200 text-[14px] hover:bg-gray-200" onClick={openProfilePicModal}>Upload profile picture</button>
                    <button className="block w-full p-1.5 border-b border-gray-200 text-[14px] hover:bg-gray-200" onClick={signOut}>Sign Out</button>
                </div>
            )}
        </div>
    );
}
 
export default UserProfile;