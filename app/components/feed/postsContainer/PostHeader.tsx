import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";

const PostHeader = ({
  firstName,
  lastName,
  username,
  slug,
  timestamp,
}: {
  firstName: string;
  lastName: string;
  username: string;
  slug: string;
  timestamp: string;
}) => {
  return (
    <div className="flex items-center justify-between space-x-2 mb-1">
        <Link href={`/profile/${slug}`} className="flex items-center text-sm xs:text-[15px] sm:text-base font-semibold hover:underline space-x-2 dark:text-twitterTextDarkmode post-userLink">
          <p className="line-clamp-1 post-name">{firstName} {lastName}</p>
          <p className="theme-gray700-gray400 line-clamp-1 post-username">@{username}</p>
          <p className="text-sm sm:text-[15px] theme-gray500-gray400 line-clamp-1 post-timestamp">• {timestamp}</p>
        </Link>

        <span className="dark:text-twitterTextDarkmode"><BsThreeDots /></span>
    </div>
  )
};
 
export default PostHeader;