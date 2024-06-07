"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

type CollectionCardProps = {
    route: string;
    image: string;
    title: string;
};


export default function CollectionCard({ route, image, title }: CollectionCardProps) {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={route} className="shadow-lg inline-block relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="overflow-hidden rounded-xl relative" style={{ width: '400px', height: '400px' }}>
        <div>
          <Image src={image} alt={title} layout="fill" objectFit="cover" className={`transition-transform duration-300 transform-gpu ${isHovered ? "scale-110" : "scale-100"}`} />
        </div>
        <Button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-zinc-900 bg-white text-lg font-bold hover:bg-white">{title}</Button>
      </div>
    </Link>
  )
}
