import Link from "next/link";
import { db } from "@/firebase";
import type { Metadata } from 'next'
import { HeaderBack, User, UserPosts } from "@/app/components";
import { collection, getDocs, query, where } from "firebase/firestore";

export const metadata: Metadata = {
  title: "NB Twitter - Profile"
}

const getUser = async (username:string) => {
    const user = [] as any;
    const userQuery = query(collection(db, "users"), where("username", "==", username));
    const userSnaphsot = await getDocs(userQuery);
    userSnaphsot.forEach(userDoc => user.push(userDoc));
    
    if(user[0]){
        const userData = { id: user[0].id, ...user[0].data() };
        const userPosts = [] as any;
        const userPostsQuery = query(collection(db, "userPosts"), where("email", "==", userData.email));
        const userPostsSnapshot = await getDocs(userPostsQuery);
        userPostsSnapshot.forEach(postDoc => userPosts.push({id: postDoc.id, ...postDoc.data()}));

        return { exists: true, userData, userPosts }
    }
    else return { exists: false }

}

const ProfilePage = async ({ params: { username } } : { params: { username:string } }) => {
    const { exists, userData, userPosts } = await getUser(username);

    return (
      <section className="flex-1 border-r theme-grayBorder-200-700 max-w-[660px]">
        <HeaderBack title={exists ? userData.username : "Profile"} />

        {exists ? (
          <>
            <User userData={userData} userPosts={userPosts} />
            <UserPosts userPosts={userPosts} />
          </>
        ) : (
          <div className="p-3 mt-6 flex flex-col items-center space-y-4">
            <h4 className="text-center dark:text-twitterTextDarkmode">Could not find that user, go back to the homepage</h4>
            <Link href={"/"} className="btn btn-m btn-prim">Home</Link>
          </div>
        )}
      </section>
    );
}
 
export default ProfilePage;