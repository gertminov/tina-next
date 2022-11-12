import React from 'react';
import Image from "next/image";

export interface Cert {
    name:string
    img: string
}

function CertificateTile({name, img}:Cert) {
    return (
        <div className="basis-1/4  min-w-[24rem] flex items-center">
            <div className="relative w-full h-96 border">
                <Image src={img} className="object-contain grayscale hover:grayscale-0" fill alt={name}/>
            </div>
        </div>
    );
}

export default CertificateTile;