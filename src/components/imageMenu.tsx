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

export function ImageMenu({image}:{ image:SearchResult}) {
  return (
    <div className="absolute top-2 right-2">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
        variant="secondary" 
        className="w-8 h-8 p-0">
            <Menu/>
            </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-46">
        
          <DropdownMenuItem asChild>
            <AddtoAlbumDialog image={image}            
            />
            {/* <FolderPlus />
            <span> Add to Album</span> */}
           
          
          </DropdownMenuItem>
         
          </DropdownMenuContent>
        
    </DropdownMenu>
    </div>
  )
}
