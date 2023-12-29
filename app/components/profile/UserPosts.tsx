import { Post } from "..";
import { postElement } from "@/app/utils/Elements";

const UserPosts = ({ userPosts } : { userPosts: postElement[] }) => {
    return (
      <div>
        <h5 className="p-3 font-semibold border-b theme-grayBorder-200-700 dark:text-twitterTextDarkmode">Tweets</h5>

        {userPosts.length > 0 ? (
          <>
            {userPosts.map(post => <Post post={post} key={post.id} />)}
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