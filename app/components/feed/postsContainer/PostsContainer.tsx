"use client"

import Post from "./Post";
import { db } from "@/firebase";
import { useEffect, useState } from "react";
import { postElement } from "@/app/utils/Elements";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const PostsContainer = () => {
    const [posts, setPosts] = useState<postElement[]>([]);

    useEffect(() => {
        const q = query(collection(db, "userPosts"), orderBy("timestamp", "desc"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            const postings = [] as any;
            querySnapshot.forEach(doc => postings.push({id: doc.id, ...doc.data()}));
            setPosts(postings);
        })
    }, []);

    return (
      <div>
        {posts.length < 1 ? (
          <div className="px-3 pt-[6rem] flex justify-center">
            <div className="loading loading-m"></div>
          </div>
        ) : (
          posts.map(post => <Post key={post.id} post={post} />)
        )}
      </div>
    );
}
 
export default PostsContainer;