import Image from "next/image";
import { LoginForm } from "../index";
import { logo } from "@/app/utils/helpingHand";

const LoginPage = () => {
    return (  
        <section>
            <div className="min-h-screen flex justify-center items-center flex-col p-4">
                <Image src={logo} alt="Twitter" width={100} height={100} className="w-[60px] min-w-[60px] sm:w-[80px]" />
                <LoginForm />
            </div>
        </section>
    );
}
 
export default LoginPage;