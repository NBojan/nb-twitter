import Image from "next/image";
import { logo } from "../utils/helpingHand";

const AppLoading = () => {
    return (
        <section className="min-h-screen flex items-center justify-center p-4 dark:bg-twitterDark">
            <Image src={logo} width={100} height={100} alt="Twitter" className="min-w-[100px] animate-bounce" />
        </section>
    );
}
 
export default AppLoading;