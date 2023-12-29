import Image from "next/image";

const PostImage = ({ postImage } : { postImage: string }) => {
    return (
      <div className="mt-2">
        <Image src={postImage} width={510} height={510} alt="" className="rounded-2xl max-h-[510px] w-auto" />
      </div>
    );
}
 
export default PostImage;