"use client"

import { db } from "@/firebase";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/app/context";
import { likeElement, commentElement, postElementPlain } from "@/app/utils/Elements"; 
import { FaRegTrashCan, FaRegCommentDots, FaRegHeart, FaDeezer, FaRetweet, FaHeart } from "react-icons/fa6";
import { Timestamp, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from "firebase/firestore";

const PostButtons = ({ post } : { post: postElementPlain }) => {
    const { user, setCommentModal } = useGlobalContext();
    const [likes, setLikes] = useState<likeElement[]>([]);
    const [comments, setComments] = useState<commentElement[]>([]);
    
    const isOwner = post.email === user.email;
    const hasLiked = likes.find((like) => like.id === user.email);

    useEffect(() => {
        const qLikes = query(collection(db, "userPosts", post.id, "likes"), orderBy("timestamp", "desc"));
        const unsubLikes = onSnapshot(qLikes, (querySnapshot) => {
            const likings = [] as any;
            querySnapshot.forEach((doc) => likings.push({id:doc.id, ...doc.data()}));
            setLikes(likings);
        });

        const qComments = query(collection(db, "userPosts", post.id, "comments"), orderBy("timestamp", "desc"));
        const unsubComments = onSnapshot(qComments, (querySnapshot) => {
            const commentings = [] as any;
            querySnapshot.forEach((doc) => commentings.push({id:doc.id, ...doc.data()}));
            setComments(commentings);
        });
    }, [])

    const addLike = async () => {
        await setDoc(doc(db, "userPosts", post.id, "likes", user.email), {
            username: user.username,
            timestamp: Timestamp.fromDate(new Date())
        });
    }
    const removeLike = async () => {
        await deleteDoc(doc(db, "userPosts", post.id, "likes", user.email));
    }
    const openModal = () => {
        const { id, firstName, lastName, username, userImg, text, postImage, timestamp } = post;
        setCommentModal({open: true, postId: id, firstName, lastName, username, userImg, postImage, text, timestamp });
    }
    const removePost = async () => {
        if(confirm("Remove this tweet?")){
            await deleteDoc(doc(db, "userPosts", post.id));
        }
        else return
    }

    return (
        <div className="flex justify-between items-center mt-2">
            <div className="flex items-center space-x-1">
                <button type="button" className="post-btn comment-btn" onClick={openModal}><FaRegCommentDots /></button>
                {comments.length > 0 && <span className="text-xs theme-gray500-gray400">{comments.length}</span>}
            </div>
            
            <div className="flex items-center space-x-1">
                {hasLiked ? 
                    <button type="button" className="post-btn text-red-500 dark:text-red-500 hover:bg-red-200 dark:hover:bg-red-900 dislike-btn" onClick={removeLike}><FaHeart /></button> 
                : 
                    <button type="button" className="post-btn hover:text-red-500 hover:bg-red-200 dark:hover:bg-red-900 like-btn" onClick={addLike}><FaRegHeart /></button>
                }
                {likes.length > 0 && <span className={`text-xs ${hasLiked ? 'text-red-500' : 'theme-gray500-gray400'} likeNumber`}>{likes.length}</span>}
            </div>

            <button type="button" className="post-btn"><FaRetweet /></button>
            {isOwner && <button type="button" className="post-btn delete-btn" onClick={removePost}><FaRegTrashCan /></button>}
            <button type="button" className="post-btn"><FaDeezer /></button>
        </div>
    );
}
 
export default PostButtons;