import { postElement, userElement } from "@/app/utils/Elements";
import Image from "next/image";

const User = ({ userData, userPosts } : { userData: userElement, userPosts: postElement[] }) => {
    return (
        <div className="p-3 border-b theme-grayBorder-200-700 flex items-center space-x-4">
            <Image src={userData.userImg} width={96} height={96} alt="UserImg" className="rounded-full w-[96px] h-[96px] border-2 theme-grayBorder-200-700" />

            <div>
                <p className="font-semibold tracking-wide text-lg dark:text-twitterTextDarkmode">{userData.firstName} {userData.lastName}</p>
                <p className="font-semibold tracking-wide text-lg dark:text-twitterTextDarkmode">@{userData.username}</p>
                <p className="theme-gray500-gray400">{userPosts.length} {userPosts.length === 1 ? "tweet" : "tweets"}</p>
            </div>
        </div>
    );
}
 
export default User;