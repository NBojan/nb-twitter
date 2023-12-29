import { followSuggestElement } from "./FollowsWidget";

const Follow = ({ follow }: { follow: followSuggestElement }) => {

    return (
        <div className="flex items-center justify-between mb-3 px-4 py-2 space-x-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <div className="flex items-center space-x-2">
                <img src={follow.picture.thumbnail} alt="" className="w-[40px] h-[40px] rounded-full" />
                
                <div>
                    <p className="text-sm line-clamp-2 dark:text-twitterTextDarkmode">{follow.login.username}</p>
                    <p className="text-xs theme-gray500-gray400">{follow.name.first} {follow.name.last}</p>
                </div>
            </div>

            <button type="button" className="btn btn-s rounded-full text-white bg-black hover:bg-blue-500 dark:bg-gray-500 dark:hover:bg-blue-500 transition">Follow</button>
        </div>
    );
}
 
export default Follow;