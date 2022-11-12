import React from 'react';
import Image from "next/image";

interface SkillInt {
    img:string
    name:string
}

function SkillTile({img, name}:SkillInt) {
    return (
        <div className="p-2 hover:scale-105 transition duration-100 basis-1/5 ">
            <div className=" mx-auto h-24 w-24 relative p-4">
                <Image src={img} fill alt={name}/>
            </div>
            <p className=" text-center text-xl text-primtext p-4 mt-4">{name}</p>
        </div>
    );
}

export default SkillTile;