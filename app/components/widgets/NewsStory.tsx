import Link from "next/link";
import { newsElement } from "./NewsWidget";

const NewsStory = ({ newsStory }:{ newsStory:newsElement }) => {
    return (
        <Link href={newsStory.url} target="_blank" className="flex items-center justify-between mb-3 px-4 py-2 space-x-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <div className="space-y-1">
                <p className="text-sm line-clamp-2 dark:text-twitterTextDarkmode">{newsStory.title}</p>
                <p className="text-xs theme-gray500-gray400">{newsStory.source.name}</p>
            </div>

            <img src={newsStory.urlToImage} alt="" className="min-w-[80px] w-[80px] h-[50px] rounded" />
        </Link>
    );
}
 
export default NewsStory;