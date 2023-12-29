"use client"

import { AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "@/app/context";

const SidebarSwitch = () => {
    const { setSidebarModal } = useGlobalContext();

    return (
        <button type="button" className="text-[24px] hover:scale-125 transition sm:hidden dark:text-twitterTextDarkmode" onClick={() => setSidebarModal(true)}>
            <AiOutlineMenu />
        </button>
    );
}
 
export default SidebarSwitch;