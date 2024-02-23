import { SearchResult } from "@/app/gallery/page"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FolderPlus } from "lucide-react"
import React from "react"
import { useState } from "react"

import AddImagetoAlbum from "./actions"
 
export function AddtoAlbumDialog({image}:{ image:SearchResult}) {
    const [albumName,setAlbumName] = useState("")
    const [open,setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger >
       <Button variant="ghost">
        <FolderPlus className= "mr-2 h-4 w-4"/>
            <span> Add to Album</span>
            </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle> Add to Album</DialogTitle>
          <DialogDescription>
         Type an album you want to move this image into
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input
            onChange={(e) => setAlbumName(e.target.value)}
            id="albumName" value={albumName} className="col-span-3" />
          </div>
          
        </div>
        <DialogFooter>
          <Button 
          onClick={async() => {
            setOpen(false)
            await AddImagetoAlbum(image,albumName)
            }} type="submit">
            Add to Album
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}