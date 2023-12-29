"use client"

import { db } from "@/firebase";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/app/context";
import { likeElement, postElementPlain } from "@/app/utils/Elements"; 
import { FaRegTrashCan, FaRegHeart, FaDeezer, FaRetweet, FaHeart } from "react-icons/fa6";
import { Timestamp, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from "firebase/firestore";

const CommentButtons = ({ comment, postId } : { comment: postElementPlain, postId: string }) => {
    const { user } = useGlobalContext();
    const [likes, setLikes] = useState<likeElement[]>([]);
    
    const isOwner = comment.email === user.email;
    const hasLiked = likes.find((like) => like.id === user.email);

    useEffect(() => {
        const qLikes = query(collection(db, "userPosts", postId, "comments", comment.id, "likes"), orderBy("timestamp", "desc"));
        const unsubLikes = onSnapshot(qLikes, (querySnapshot) => {
            const likings = [] as any;
            querySnapshot.forEach((doc) => likings.push({id:doc.id, ...doc.data()}));
            setLikes(likings);
        });
    }, [])

    const addLike = async () => {
        await setDoc(doc(db, "userPosts", postId, "comments", comment.id, "likes", user.email), {
            username: user.username,
            timestamp: Timestamp.fromDate(new Date())
        });
    }
    const removeLike = async () => {
        await deleteDoc(doc(db, "userPosts", postId, "comments", comment.id, "likes", user.email));
    }
    const removePost = async () => {
        if(confirm("Remove this tweet?")){
            await deleteDoc(doc(db, "userPosts", postId, "comments", comment.id));
        }
        else return;
    }

    return (
        <div className="flex justify-between items-center mt-2">
            {hasLiked ? (
                <div className="flex items-center space-x-1">
                    <button type="button" className="post-btn text-red-500 dark:text-red-500 hover:bg-red-200 dark:hover:bg-red-900" onClick={removeLike}><FaHeart /></button>
                    <span className="text-xs text-red-500">{likes.length}</span>
                </div>
                ) : (
                <button type="button" className="post-btn hover:text-red-500 hover:bg-red-200 dark:hover:bg-red-900" onClick={addLike}><FaRegHeart /></button>
            )}

            <button type="button" className="post-btn"><FaRetweet /></button>
            {isOwner && <button type="button" className="post-btn" onClick={removePost}><FaRegTrashCan /></button>}
            <button type="button" className="post-btn"><FaDeezer /></button>
        </div>
    );
}
 
export default CommentButtons;