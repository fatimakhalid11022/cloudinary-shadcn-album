import UploadButton from './upload_button';
import cloudinary from "cloudinary"
import CloudinaryImage from "./cloudinaryImage"

export type SearchResult = {

    public_id:string;
    tags:string[]
}


export default async function Gallery() {
    const results = await cloudinary.v2.search
         .expression("resource_type:image")
         .sort_by("created_at","desc")
         .with_field("tags")
         .max_results(30)
         .execute() as {resources:SearchResult[]}
           
         console.log("results",results)
    return (
        <section>
            <div className='flex flex-col gap-8'>
            <div className='flex justify-between'>
            <h1 className='text-4xl font-bold'>Gallery</h1>
           <UploadButton 
           />
           </div>
            <div className='grid grid-cols-4 gap-4'>
           {results.resources.map((result) => (
              <CloudinaryImage 
              key={result.public_id}
             
              ImageData={result}
              height={300}
              width={400}
              alt="an image of something"/>
           ) )}
           </div>
            </div>
        </section>
    );
}

 