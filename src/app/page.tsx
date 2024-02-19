"use client"
import Image from "next/image";
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from "react";

export type UploadResult ={
  info:{
  public_id:string
  }
  event:"success"
}

export default function Home() {
  const [imageId,setImageId] = useState("cld-sample-4")
  return (
   <div>
    <CldUploadButton
    className="text-center"
    onUpload={(result: UploadResult )=>{
      return setImageId(result.info.public_id);
    }}
    uploadPreset="sjc6sysh" />
   
 {imageId && 
<CldImage
  width="400"
  height="300"
  src={imageId}
  sizes="100vw"
  zoom="0.75"
  alt="Description of my image"
/>}
   </div>
  );
}
