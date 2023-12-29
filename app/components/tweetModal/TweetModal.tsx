"use client"

import { FaX } from "react-icons/fa6";
import { CreatePost, ProfilePic } from "..";
import { useGlobalContext } from "@/app/context";

const TweetModal = () => {
    const { tweetModal, setTweetModal } = useGlobalContext();
    const closeModal = () => setTweetModal({open: false, profilePic: false});

    const handleClose = (e: any) => {
        if(e.target.id === "closeModal") return closeModal();
    }

    return (
        <aside onClick={handleClose} id="closeModal" className={`fixed bg-white top-0 left-0 w-full h-full bg-opacity-40 flex items-center justify-center transition ${tweetModal.open ? 'opacity-100 visible z-50': 'opacity-0 invisible'}`}>
            <div className="border theme-grayBorder-200-700 shadow-lg rounded-lg py-4 bg-white w-[90%] max-w-[580px] max-h-[100%] overflow-y-scroll scrollbar-thin dark:bg-gray-800">
                <div className="border-b theme-grayBorder-200-700 px-3 pb-2 mb-4">
                    <button type="button" onClick={closeModal} className="p-2 rounded-full transition hover:bg-gray-100 dark:text-twitterTextDarkmode dark:hover:bg-gray-700"><FaX /></button>
                </div>

                
                {tweetModal.profilePic ? (
                    <ProfilePic />
                ) : (
                    <div className="px-3">
                        <CreatePost inputId="forFileTweetModal" isModal={true} />
                    </div>
                )}
                
            </div>
        </aside>
    );
}
 
export default TweetModal;