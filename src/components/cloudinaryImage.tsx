"use client"
import React, { ComponentProps, useState, useTransition } from 'react';
import { CldImage, CldImageProps } from 'next-cloudinary';
import Heart from '@/components/icons/heart';
import FullHeart from '@/components/icons/FullHeart';
import { setAsFavouriteAction } from '@/app/gallery/actions';
import { SearchResult } from '@/app/gallery/page';
import { ImageMenu } from './imageMenu';

function CloudinaryImage(props:{
    ImageData : SearchResult;
   
    onUnheart?:(unheartedResource:SearchResult)=>void;
}& Omit<CldImageProps,"src">) {
    const [transition,startTransition] =useTransition()
    const { ImageData, onUnheart } = props
    
    const [isFavourited,setIsFavourited] = useState( 
        ImageData.tags.includes("favourite")
    )
    return (
        <div className='relative'>
            <CldImage
           {...props}
           src={ImageData.public_id}
           />
           {isFavourited ? (
           <FullHeart
          
          onClick={() => {
            onUnheart?.(ImageData)
            setIsFavourited(false)
            startTransition(()=>{
            setAsFavouriteAction(ImageData.public_id, false)
        })
          }}
          className='absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer'/>
      )  : (
            <Heart
           
            onClick={() => {
                setIsFavourited(true)
                startTransition(()=>{
                setAsFavouriteAction(ImageData.public_id, true)
            })
              }}
              className='absolute top-2 left-2 hover:text-red-500  cursor-pointer'
        
        />)
            
       
         } 
         <ImageMenu 
         image={ImageData}/>
        </div>
    );
}

export default CloudinaryImage;