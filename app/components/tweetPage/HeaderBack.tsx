import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { ThemeSwitch, SidebarSwitch } from "..";

const HeaderBack = ({ title } : { title:string }) => {
    return (  
        <header className="flex justify-between items-center p-3 border-b theme-grayBorder-200-700">
            <div className="flex items-center space-x-4 sm:text-[18px] dark:text-twitterTextDarkmode">
                <Link href={"/"} className="hover:scale-125 transition"><BsArrowLeft /></Link>
                <p>{title}</p>
            </div>

            <div className="flex items-center space-x-4">
                <SidebarSwitch />
                <ThemeSwitch />
            </div>
        </header>
    );
}
 
export default HeaderBack;