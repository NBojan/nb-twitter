import Link from "next/link";
import { ThemeSwitch, SidebarSwitch } from "../..";

const Header = () => {
    return (  
        <header className="flex justify-between items-center p-3 border-b theme-grayBorder-200-700">
            <Link href={"/"} className="sm:text-[18px] dark:text-twitterTextDarkmode">Home</Link>

            <div className="flex items-center space-x-4">
                <SidebarSwitch />
                <ThemeSwitch />
            </div>
        </header>
    );
}
 
export default Header;