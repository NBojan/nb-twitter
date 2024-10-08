import Image from "next/image";
import { postElement, userElement } from "@/app/utils/Elements";

const User = ({ userData, userPosts } : { userData: userElement, userPosts: postElement[] }) => {
    return (
        <div className="p-3 border-b theme-grayBorder-200-700 flex items-center space-x-4">
            <Image src={userData.userImg} width={96} height={96} alt="UserImg" className="rounded-full w-[96px] h-[96px] border-2 theme-grayBorder-200-700" />

            <div>
                <p className="font-semibold tracking-wide text-lg dark:text-twitterTextDarkmode profile-name">{userData.firstName} {userData.lastName}</p>
                <p className="font-semibold tracking-wide text-lg dark:text-twitterTextDarkmode profile-username">@{userData.username}</p>
                <p className="theme-gray500-gray400 profile-postLength">{userPosts.length} {userPosts.length === 1 ? "tweet" : "tweets"}</p>
            </div>
        </div>
    );
}
 
export default User;