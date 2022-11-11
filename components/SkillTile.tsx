import React from 'react';
import Image from "next/image";

interface SkillInt {
    img:string
    name:string
}

function SkillTile({img, name}:SkillInt) {
    return (
        <div>
            <div className="h-12 w-12 relative">
                <Image src={img} fill alt={name}/>
            </div>
            <p>{name}</p>
        </div>
    );
}

export default SkillTile;