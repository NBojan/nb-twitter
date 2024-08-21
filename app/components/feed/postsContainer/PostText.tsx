const PostText = ({ text } : { text: string }) => {
    return (
        <div>
            <p className="text-sm xs:text-base text-gray-900 tracking-wide dark:text-twitterTextDarkmode post-text">{text}</p>
        </div>
    );
}
 
export default PostText;