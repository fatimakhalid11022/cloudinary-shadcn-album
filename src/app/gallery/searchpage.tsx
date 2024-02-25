"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function Searchpage({initialSearch}:{initialSearch:string})
 {
    const [tagName,setTagName] = useState(initialSearch ?? "")
    const router = useRouter()
    useEffect(()=>{
    setTagName(initialSearch)
    },[initialSearch])
    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            router.replace(`/gallery?search=${encodeURIComponent(tagName)}`)
            router.refresh()
        }}>
            <Label htmlFor="tag-name" className="text-right">
              Search by Tag
            </Label>
            <div className="flex gap-2">
            <Input
            onChange={(e) => setTagName(e.target.value)}
            id="tagName" value={tagName} className="col-span-3" />
            <Button type="submit">Search</Button>
            </div>
        </form>
    );
}

