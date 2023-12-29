"use client"

import { FaX } from "react-icons/fa6";
import { useGlobalContext } from "@/app/context";

const SidebarModal = () => {
    const { sidebarModal, setSidebarModal, setTweetModal, signOut } = useGlobalContext();

    const handleProfilePic = () => {
        setTweetModal({open: true, profilePic: true});
        setSidebarModal(false);
    }

    return (
        <aside className={`fixed left-0 top-0 w-full h-full z-50 bg-gray-100 transition ${sidebarModal ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>
            <div className="flex items-center justify-between p-4 border-b border-gray-300">
                <h3 className="text-sky-500 font-semibold">NB Twitter</h3>
                <button className="text-[20px] hover:scale-125 transition" onClick={() => setSidebarModal(false)}><FaX /></button>
            </div>

            <div className="h-full flex flex-col items-start justify-center">
                <button className="block px-4 py-2 border-b border-gray-300 text-[18px] hover:bg-gray-200 hover:pl-8 transition-all" onClick={handleProfilePic}>Upload profile picture</button>
                <button className="block px-4 py-2 border-b border-gray-300 text-[18px] hover:bg-gray-200 hover:pl-8 transition-all" onClick={signOut}>Sign Out</button>
            </div>
        </aside>
    );
}
 
export default SidebarModal;