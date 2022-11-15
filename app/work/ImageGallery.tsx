import React from 'react';
import Image from "next/image"

type ImageGalleryProps =  {
    images: string[],
    path: string,
    altText: string
    ext?: string
}

function ImageGallery({images, path, ext, altText}:ImageGalleryProps) {


     ext = ext ?? ".jpg"
    return (
        <div className="w-full border-t border-primary">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 ">
                {images.map((image) => {
                    return (
                        <div key={image} className="relative m-6 aspect-video">
                            <Image
                                fill
                                className=" h-full w-full object-contain shadow"
                                src={`${path}${image}${ext}`}
                                alt={altText}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ImageGallery;