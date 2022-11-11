'use client'
import React from 'react';
import Image from "next/image";
import Button from "../components/Button";

function IntroDuction() {
    return (
        <div className=" w-full h-screen md:h-[90vh] p-12 bg-background ">
            <div className="w-full h-full  bg-white flex flex-row-reverse flex-wrap">
                <div className="basis-full md:basis-1/3 relative h-1/4 md:h-full">
                    <Image src={"/TinaFoto.jpg"} fill className="object-cover" alt={"photo of Valentina Werr"}/>
                </div>
                <div className="basis-full h-full md:basis-2/3 flex place-content-center p-4 md:p-12 ">
                    <div className="flex flex-col gap-6 max-w-lg ">
                        <h1>Hello,</h1>
                        <h3>my name is Valentina</h3>
                        <p className="text-lg leading-8">I am a business administration student with a focus on marketing and media management. My
                            creative head is driven by thinking outside the box. I am a marketing and trend enthusiast,
                            looking for new adventures in the field of media management, digital marketing and data
                            analysis.</p>
                        <div className="mx-auto">
                            <Button onClick={() => {
                            }} text={"Download CV"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroDuction;