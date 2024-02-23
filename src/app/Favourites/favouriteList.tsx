"use client"
import { SearchResult } from '../gallery/page';
import cloudinary from "cloudinary"
import CloudinaryImage from "../gallery/cloudinaryImage"
import { ForceRefresh } from '@/components/force-refresh';
import { useState } from 'react';



export default function FavouriteList({initialResources}:{initialResources:SearchResult[]}) {
    const [resources,setResources] = useState(initialResources)
   
    return (
        <section>
            <ForceRefresh/>
           
            <div className='grid grid-cols-4 gap-4'>
           {resources.map((result) => (
              <CloudinaryImage 
             
              key={result.public_id}
              
              ImageData={result}
              height={300}
              width={400}
              alt="an image of something"
              onUnheart={(unheartedResource)=>{
                setResources((currentResources) => 
                    currentResources.filter(
                        (resource)=>  resource.public_id !== unheartedResource.public_id)
                )
              }}
              />
           
           ))}
            </div>
        </section>
    );
}

 