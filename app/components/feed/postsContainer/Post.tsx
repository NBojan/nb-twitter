import Link from "next/link";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { postElement } from "@/app/utils/Elements"; 
import { PostButtons, PostHeader, PostImage, PostText } from "../..";

const Post = ({ post } : { post: postElement }) => {
    const timestamp = formatDistanceToNow(post.timestamp.toDate());
    const postPlainObject = {...post, timestamp};
    
    return (
        <article className="flex p-3 border-b theme-grayBorder-200-700 space-x-4 post">
            <Image src={post.userImg} width={48} height={48} alt="UserImg" className="rounded-full w-[48px] h-[48px]" />
            
            <div className="flex-1">
                <PostHeader firstName={post.firstName} lastName={post.lastName} username={post.username} timestamp={timestamp} />
                <Link href={`/tweet/${post.id}`} className="post-postLink">
                    {post.text && <PostText text={post.text} />}
                    {post.postImage && <PostImage postImage={post.postImage} />}
                </Link>
                <PostButtons post={postPlainObject} />
            </div>
        </article>
    );
}
 
export default Post;