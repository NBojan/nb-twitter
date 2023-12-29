"use client"

import { BsXCircle } from "react-icons/bs";
import { Dispatch, SetStateAction } from "react";

const SelectedFile = ({
  file,
  setSelectedFile,
}: {
  file: string;
  setSelectedFile: Dispatch<SetStateAction<string | null>>;
}) => {
  return (
    <div className="flex">
      <div className="relative group cursor-pointer" onClick={() => setSelectedFile(null)}>
        <img src={file} alt="" className="max-h-[510px]" />

        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 opacity-0 flex items-center justify-center group-hover:opacity-100 transition">
          <span className="block text-white text-[32px]"><BsXCircle /></span>
        </div>
      </div>
    </div>
  );
};
 
export default SelectedFile;