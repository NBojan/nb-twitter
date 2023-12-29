import Link from "next/link";
import Image from "next/image";
import { logo } from "@/app/utils/helpingHand";

const Logo = () => {
    return (
      <Link
        href="/"
        className="flex items-center justify-center w-[64px] h-[64px] rounded-full hover:bg-blue-100 dark:hover:bg-sky-900 mb-6 transition"
      >
        <Image src={logo} width={40} height={40} alt="Logo" className="min-w-[40px]" />
      </Link>
    );
}
 
export default Logo;