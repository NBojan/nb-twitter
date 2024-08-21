"use client"

import Post from "../feed/postsContainer/Post";
import { db } from "@/firebase";
import { useEffect, useState } from "react";
import { postElement } from "@/app/utils/Elements";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";

const UserPosts = ({ userEmail, userPosts }: { userEmail:string, userPosts: postElement[] }) => {
    const [posts, setPosts] = useState<postElement[]>([]);

    useEffect(() => {
      const q = query(collection(db, "userPosts"), where("email", "==", userEmail), orderBy("timestamp", "desc"));
      const unsub = onSnapshot(q, (querySnapshot) => {
        const postings = [] as any;
        querySnapshot.forEach((doc) =>  postings.push({id: doc.id, ...doc.data()}));
        setPosts(postings);
      });
    }, [])

    return (
      <div>
        <h5 className="p-3 font-semibold border-b theme-grayBorder-200-700 dark:text-twitterTextDarkmode">Tweets</h5>

        {userPosts.length > 0 ? (
          <>
            {posts.map(post => <Post post={post} key={post.id} />)}
          </>
        ) : (
          <div className="p-3 mt-6">
            <h4 className="text-center dark:text-twitterTextDarkmode">No recent tweet activity.</h4>
          </div>
        )}
      </div>
    );
}
 
export default UserPosts;