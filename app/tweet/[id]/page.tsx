import { db } from "@/firebase";
import type { Metadata } from 'next'
import { doc, getDoc } from "firebase/firestore";
import { postElement } from "@/app/utils/Elements";
import { CommentsContainer, HeaderBack, Post } from "@/app/components";

export const metadata: Metadata = {
  title: "NB Twitter - Tweet"
}

const getTweet = async ( postId:string ) => {
    const docSnap = await getDoc(doc(db, "userPosts", postId));
    if(!docSnap.exists()) throw new Error("Could not find that tweet.");
    return { id: docSnap.id, ...docSnap.data() }
}

const TweetPage = async ({ params: { id } }: { params: { id: string } }) => {
  const tweetData = await getTweet(id) as postElement;

  return (
    <section className="flex-1 border-r theme-grayBorder-200-700 max-w-[660px]">
      <HeaderBack title="Tweet" />
      <Post post={tweetData} />
      <CommentsContainer postId={id} />
    </section>
  );
};
 
export default TweetPage;