"use server"
import { SearchResult } from '@/app/gallery/page';
import cloudinary from 'cloudinary';

export default async function AddImagetoAlbum(image:SearchResult,album:string) {
 const existingFolder = await cloudinary.v2.api.create_folder(album)
   
 cloudinary.v2.uploader.rename(
    image.public_id,
    `${album}/${image.public_id}`)
}

