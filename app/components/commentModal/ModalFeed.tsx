"use client"

import Image from "next/image";
import { useGlobalContext } from "@/app/context";
import { CreateComment, PostHeader, PostImage, PostText } from "..";

const ModalFeed = () => {
    const { commentModal } = useGlobalContext();

    return (
        <div className="px-4">
            <div className="flex space-x-4 mb-8 relative">
                <Image src={commentModal.userImg} width={48} height={48} alt="UserImg" className="rounded-full w-[48px] h-[48px]" />

                <div className="flex-1">
                    <PostHeader firstName={commentModal.firstName} lastName={commentModal.lastName} username={commentModal.username} slug={commentModal.slug} timestamp={commentModal.timestamp} />
                    {commentModal.text && <PostText text={commentModal.text} />}
                    {commentModal.postImage && <PostImage postImage={commentModal.postImage} />}
                </div>

                <span className="absolute top-[48px] left-[4px] h-full border theme-grayBorder-200-700"></span>
            </div>

            <div className="relative">
                <CreateComment postId={commentModal.postId} />
            </div>
        </div>
    );
}
 
export default ModalFeed;