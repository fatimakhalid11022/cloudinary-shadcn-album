"use client"

import { Button } from "@/components/ui/button"
import { CldImage } from "next-cloudinary"
import { useState } from "react"

export default function EditPage({searchParams:{publicId}}:{
    searchParams: {
        publicId:string
    }
}){
    
     const [transformation,setTransformation] = useState  <undefined | "blur" | "tint" | "grayscale" >()
    return(
        <div>
          <div className='flex flex-col gap-8'>
            <div className='flex justify-between'>
            <h1 className='text-4xl font-bold'>Edit {publicId}</h1>
           
           </div>
           <div className="flex gap-4">
           <Button variant="ghost" onClick={() => setTransformation(undefined) }>
              Clear All
           </Button>
           
           <Button onClick={() => setTransformation("tint") }>
              Apply Tint
           </Button>
           <Button onClick={() => setTransformation("grayscale") }>
             Apply Grayscale
           </Button>
          
          
           <Button onClick={() => setTransformation("blur") }>
             Blur All
           </Button>
           </div>
           <div className="grid grid-cols-2 gap-12">
           <CldImage 
           src = {publicId}
           width="400"
           height="300"
           alt="editing image"
           />
           
           {transformation === "blur" && (
           <CldImage 
           src = {publicId}
           width="1200"
           height="1400"
           alt=" image to be" 
           blur="800"
            />)}
           {transformation === "tint" && (
           <CldImage
           width="960"
           height="600"
           src={publicId}
           sizes="100vw"
           tint="equalize:80:blue:blueviolet"
           alt=""
         />
         
         
         )}
           {transformation === "grayscale" && (
           <CldImage 
           src = {publicId}
           width="1200"
           height="1400"
           grayscale
           alt=" image to be" 
          
            />)}
           
        
           </div>
            </div>
            </div>
    )
}