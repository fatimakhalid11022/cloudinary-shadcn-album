"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ForceRefresh() {
    const router = useRouter();
    
    useEffect(() => {
        router.refresh();
    }, [router]); // Add router to dependency array

    return null;
}