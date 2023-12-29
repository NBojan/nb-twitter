"use client"

import Link from "next/link";
import { sidebarLinks } from "@/app/utils/links";
import { useGlobalContext } from "@/app/context";

const Links = () => {
    const { user } = useGlobalContext();

    return (
        <div>
            {sidebarLinks.map(link => {
                let path = link.path;
                if(link.text === "Profile") path = `${link.path}/${user.username}`;

                return (
                    <div key={link.id} className="flex">
                        <Link href={path} className="link theme-gray700-white mb-2">
                            <span className="text-[32px]">{link.icon}</span>
                            <p className="hidden xl:block text-[20px] tracking-wide">{link.text}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}
 
export default Links;