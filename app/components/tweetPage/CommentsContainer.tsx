"use client"

import { Comment } from "..";
import { db } from "@/firebase";
import { useState, useEffect } from "react";
import { postElement } from "@/app/utils/Elements";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const CommentsContainer = ({ postId } : { postId:string }) => {
    const [comments, setComments] = useState<postElement[]>([]);

    useEffect(() => {
        const q = query(collection(db, "userPosts", postId, "comments"), orderBy("timestamp", "desc"));
        const unsubComments = onSnapshot(q, (querySnapshot) => {
            const commentings = [] as any;
            querySnapshot.forEach((doc) => commentings.push({id:doc.id, ...doc.data()}));
            setComments(commentings);
        });
    }, [])

    return (
      <div>
        <h5 className="p-3 font-semibold border-b theme-grayBorder-200-700 dark:text-twitterTextDarkmode">Replies</h5>
        {comments.length > 0 ? (
          comments.map((comment) => <Comment key={comment.id} comment={comment} postId={postId} />)
        ) : (
          <p className="p-3 theme-gray700-gray400 tracking-wide">Be the first to leave a reply.</p>
        )}
      </div>
    );
}
 
export default CommentsContainer;