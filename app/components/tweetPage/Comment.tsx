import Image from "next/image";
import { formatDistanceToNow } from "date-fns";
import { postElement } from "@/app/utils/Elements"; 
import { CommentButtons, PostHeader, PostImage, PostText } from "..";

const Comment = ({ comment, postId } : { comment: postElement, postId: string }) => {
    const timestamp = formatDistanceToNow(comment.timestamp.toDate());
    const postPlainObject = {...comment, timestamp};
    
    return (
        <article className="flex p-3 border-b theme-grayBorder-200-700 space-x-4">
            <Image src={comment.userImg} width={48} height={48} alt="UserImg" className="rounded-full w-[48px] h-[48px]" />
            
            <div className="flex-1">
                <PostHeader firstName={comment.firstName} lastName={comment.lastName} username={comment.username} slug={comment.slug} timestamp={timestamp} />
                {comment.text && <PostText text={comment.text} />}
                {comment.postImage && <PostImage postImage={comment.postImage} />}
                <CommentButtons comment={postPlainObject} postId={postId} />
            </div>
        </article>
    );
}
 
export default Comment;