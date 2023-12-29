import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";

const PostHeader = ({
  firstName,
  lastName,
  username,
  timestamp,
}: {
  firstName: string;
  lastName: string;
  username: string;
  timestamp: string;
}) => {
  return (
    <div className="flex items-center justify-between space-x-2 mb-1">
        <Link href={`/profile/${username}`} className="flex items-center text-sm xs:text-[15px] sm:text-base font-semibold hover:underline space-x-2 dark:text-twitterTextDarkmode">
          <p className="line-clamp-1">{firstName} {lastName}</p>
          <p className="theme-gray700-gray400 line-clamp-1">@{username}</p>
          <p className="text-sm sm:text-[15px] theme-gray500-gray400 line-clamp-1">• {timestamp}</p>
        </Link>

        <span className="dark:text-twitterTextDarkmode"><BsThreeDots /></span>
    </div>
  )
};
 
export default PostHeader;