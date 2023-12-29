"use client"

import Image from "next/image";
import { useState } from "react";
import { SelectedFile } from "..";
import { BsImage } from "react-icons/bs";
import { db, storage } from "@/firebase";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "@/app/context";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const CreateComment = ({ postId } : { postId: string }) => {
    const router = useRouter();
    const { user, closeCommentModal } = useGlobalContext();
    const [loading, setLoading] = useState(false);
    const [commentText, setCommentText] = useState("");
    const [selectedFile, setSelectedFile] = useState<string | null >(null);
    
    const selectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        if(e.target.files && e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (readerEvent) => {
                if(readerEvent.target && readerEvent.target.result){
                    setSelectedFile(readerEvent.target.result as string);
                }
            }
        }
    }

    const handlePost = async () => {
        if((!commentText.trim() && !selectedFile) || loading) return;
        setLoading(true);
        
        const imageId = new Date().toString();
        const storageRef = ref(storage, `postedPictures/${user.email}/${imageId}`);
        
        if(selectedFile) {
            await uploadString(storageRef, selectedFile, "data_url").then(async (snapshot) => {
                const imageUrl = await getDownloadURL(storageRef);
                const docRef = await addDoc(collection(db, "userPosts", postId, "comments"), {
                    text: commentText.trim(),
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    username: user.username,
                    userImg: user.userImg,
                    timestamp: Timestamp.fromDate(new Date()),
                    storageId: imageId,
                    postImage: imageUrl
                })
            })
        }
        else {
            const docRef = await addDoc(collection(db, "userPosts", postId, "comments"), {
                text: commentText.trim(),
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                userImg: user.userImg,
                timestamp: Timestamp.fromDate(new Date())
            })
        }

        setCommentText("");
        setSelectedFile(null);
        closeCommentModal();
        setLoading(false);
        router.push(`/tweet/${postId}`);
    }

    return (
        <div className="flex space-x-4">
            <Image src={user.userImg} width={44} height={44} alt="UserImg" className="rounded-full w-[44px] h-[44px]" />
            
            <div className="flex-1">
                <textarea 
                  className="w-full border-b theme-grayBorder-200-700 outline-none min-h-[72px] max-h-[192px] bg-transparent dark:text-twitterTextDarkmode" 
                  placeholder="Your reply..."
                  value={commentText}
                  onChange={e => setCommentText(e.target.value)}
                />

                {selectedFile && <SelectedFile file={selectedFile} setSelectedFile={setSelectedFile} />}

                <div className="pt-3 flex items-center justify-between">
                    <div>
                        <label htmlFor="forComment" className="block p-2 rounded-full cursor-pointer text-[18px] sm:text-[20px] text-sky-500 hover:bg-sky-100 transition dark:text-sky-400 dark:hover:bg-sky-900">
                            <BsImage />
                        </label>
                        <input type="file" id="forComment" accept="image/png, image/gif, image/jpeg" className="hidden" onChange={selectImage} />
                    </div>

                    <button type="button" 
                      className="btn btn-m btn-prim rounded-full disabled:bg-sky-200 disabled:border-sky-200" 
                      disabled={(!commentText.trim() && !selectedFile) || loading}
                      onClick={handlePost}
                    >
                        {loading ? "Posting..." : "Reply"}
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default CreateComment;