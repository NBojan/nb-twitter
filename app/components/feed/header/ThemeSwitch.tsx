"use client"

import { CiDark, CiLight } from "react-icons/ci";
import { useGlobalContext } from "@/app/context";

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useGlobalContext();

    return (
        <button id="themeButton" type="button" className="text-[24px] hover:scale-125 dark:text-twitterTextDarkmode transition" onClick={toggleTheme}>
            {theme === "light" ? <CiDark /> : <CiLight />}
        </button>
    );
}
 
export default ThemeSwitch;