"use client"

import ImageGrid from '@/components/image-grid';
import { SearchResult } from './page';
import CloudinaryImage from '@/components/cloudinaryImage';



export default function GalleryGrid({images}:{images:SearchResult[]}) {
      return (
        <ImageGrid 
             images={images}
             getImage={(ImageData:SearchResult)=>{
                return(
                    <CloudinaryImage 
              key={ImageData.public_id}
             
              ImageData={ImageData}
              height={300}
              width={400}
              alt="an image of something"/>
                )
             }}
             />
           
    );
}

 