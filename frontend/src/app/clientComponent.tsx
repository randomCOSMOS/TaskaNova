"use client";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";

export default function ClientComponent(){
    const router = useRouter();
    const [origin, setOrigin] = useState("");
    
    useEffect(() => {
        if(typeof window != "undefined"){
          setOrigin(window.location.origin)
        }
      });

    const home = () =>{
        router.push(origin);
    }

    const add = () => {
        router.push(origin + "/task/add");
    }

    return (
        <ul>
            <li onClick={home}>Home</li>
            <li onClick={add}>Add</li>
        </ul>
    )
}