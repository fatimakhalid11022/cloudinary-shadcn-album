import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Menu  from "./icons/menu"
import FolderPlus from "./icons/folderPlus"
import { AddtoAlbumDialog } from "./AddtoAlbum"
import { SearchResult } from "@/app/gallery/page"
import { useState } from "react"
import Link from "next/link"
import { Pencil } from "lucide-react"

export function ImageMenu({image}:{ image:SearchResult}) {
  const [open,setOpen] = useState(false)
  return (
    <div className="absolute top-2 right-2">
    <DropdownMenu open={open} onOpenChange={setOpen} >
      <DropdownMenuTrigger asChild>
        <Button 
        variant="secondary" 
        className="w-8 h-8 p-0">
            <Menu/>
            </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-46">
        
          <DropdownMenuItem asChild >
            <AddtoAlbumDialog image={image}  
            onClose={() =>setOpen(false)}          
            />
             </DropdownMenuItem>
          <DropdownMenuItem asChild >
            <Link href={`/Edit?publicId=${encodeURIComponent(image.public_id)}`}>  
            <Pencil className="mr-2 w-4 h-4"/>
             Edit
            </Link>           
    
          </DropdownMenuItem>
         
          </DropdownMenuContent>
        
    </DropdownMenu>
    </div>
  )
}
