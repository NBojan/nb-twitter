"use client"

import { BsFeather } from "react-icons/bs";
import { useGlobalContext } from "@/app/context";

const TweetButton = () => {
    const { setTweetModal } = useGlobalContext();

    return (
        <div className="mt-2">
            <button type="button" className="hidden xl:inline-block btn btn-l btn-prim py-3 font-bold rounded-full w-full" onClick={() => setTweetModal({open: true, profilePic: false})}>
                Tweet
            </button>
            
            <button type="button" className="block xl:hidden btn-prim rounded-full p-3.5 transition">
                <span className="text-[28px]"><BsFeather /></span>
            </button>
        </div>
    );
}
 
export default TweetButton;