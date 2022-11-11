import React from 'react';
import Image from "next/image";
import Link from "next/link";

interface Tile {
    img:string
    title:string
    description: string
    link: string
}

function WorkTile({img, title, description, link}:Tile) {
    return (
        <div className="flex h-80 bg-backgroundB max-w-3xl">
            <div className="basis-1/3">
                <div className="h-52 flex relative">
                    <Image src={img} alt={title} fill className="object-cover"/>
                </div>
            </div>
            <div className="basis-2/3 p-8 flex flex-col justify-center gap-8">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="mx-auto mt-4">
                    <Link href={link} className="bg-primary text-primtext hover:bg-primtext hover:text-primary border border-primary transition  p-4">Read More</Link>
                </div>
            </div>
        </div>
    );
}

export default WorkTile;