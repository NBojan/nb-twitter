"use client"

import { useState } from "react";
import { SelectedFilePP } from "..";
import { db, storage } from "@/firebase";
import { useGlobalContext } from "@/app/context";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";

const ProfilePic = () => {
    const { user, setTweetModal } = useGlobalContext();
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState<null | string>(null);

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

    const handleUpload = async () => {
        if(!selectedFile) return;
        
        setLoading(true);
        const imageId = new Date().toString();
        const storageRef = ref(storage, `profilePictures/${user.email}/${imageId}`);

        await uploadString(storageRef, selectedFile, "data_url").then(async (snapshot) => {
            const imageUrl = await getDownloadURL(storageRef);
            await updateDoc(doc(db, "users", user.email), {
                userImg: imageUrl
            })
        })

        setSelectedFile(null);
        setLoading(false);
        setTweetModal({open: false, profilePic: false})
    }

    return (
        <div className="px-3 flex items-center flex-col">
            {!selectedFile && <div className="flex justify-center">
                <label htmlFor="profilePic" className="p-3 bg-gray-200 rounded cursor-pointer hover:bg-gray-300 transition">Select a Picture</label>
                <input type="file" id="profilePic" accept="image/png, image/gif, image/jpeg" className="hidden" onChange={selectImage} />
            </div>}

            {selectedFile && <SelectedFilePP file={selectedFile} setSelectedFile={setSelectedFile} />}

            <button 
              type="button" 
              className="btn btn-s btn-prim mt-6 disabled:bg-sky-200 disabled:border-sky-200" 
              disabled={!selectedFile || loading}
              onClick={handleUpload}
            >
                {loading ? 'Uploading' : "Upload" }
            </button>
        </div>
    );
}
 
export default ProfilePic;