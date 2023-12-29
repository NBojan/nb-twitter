import { BsSearch } from "react-icons/bs";

const SearchWidget = () => {
    return (  
        <div className="bg-white py-2 sticky top-0 z-50 mb-6 dark:bg-twitterDark">
            <div className="flex items-center space-x-3 bg-gray-100 text-gray-700 p-3 rounded-full border border-transparent focus-within:border-blue-400 group dark:bg-gray-700 dark:text-twitterTextDarkmode">
                <span className="group-focus-within:text-blue-400"><BsSearch /></span>
                <input type="text" name="search" placeholder="Search" className="bg-transparent outline-none text-sm tracking-wide" />
            </div>
        </div>
    );
}
 
export default SearchWidget;