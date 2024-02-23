
import { SearchResult } from '../gallery/page';
import cloudinary from "cloudinary"
import CloudinaryImage from "../../components/cloudinaryImage"
import { ForceRefresh } from '@/components/force-refresh';
import FavouriteList from './favouriteList';



export default async function FavouritePage() {
    const results = await cloudinary.v2.search
         .expression("resource_type:image AND tags=favourite")
         .sort_by("created_at","desc")

         .with_field("tags")
         .max_results(30)
         .execute() as {resources:SearchResult[]}
           
         
    return (
        <section>
            <ForceRefresh/>
            <div className='flex flex-col gap-8'>
            <div className='flex justify-between'>
            <h1 className='text-4xl font-bold'>Favourite Images</h1>
           
           </div>
           <FavouriteList initialResources={results.resources}/>
            
            </div>
        </section>
    );
}

 