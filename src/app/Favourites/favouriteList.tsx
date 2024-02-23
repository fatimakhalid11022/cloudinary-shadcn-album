"use client"

import { ForceRefresh } from '@/components/force-refresh';
import { useEffect, useState } from 'react';
import ImageGrid from '@/components/image-grid';
import { SearchResult } from "../gallery/page";
import CloudinaryImage from "@/components/cloudinaryImage";



export default function FavouriteList({initialResources}:{initialResources:SearchResult[]}) {
    const [resources,setResources] = useState(initialResources)
   
    useEffect(()=>{
        setResources(initialResources)
    },[initialResources])
    return (
        <section>
            <ImageGrid images={resources}
             getImage={(ImageData:SearchResult)=>{
                return(
              <CloudinaryImage 
              key={ImageData.public_id}
             
              ImageData={ImageData}
              height={300}
              width={400}
              alt="an image of something"
              onUnheart={(unheartedResource) => {
                setResources((currentResources) => 
                    currentResources.filter(
                        (resource) =>
                        resource.public_id !== unheartedResource.public_id
                    )
                )
               
              }}/>
                )
             }}
            />
            <ForceRefresh/>
           
            
           
           
            
        </section>
    );
}

