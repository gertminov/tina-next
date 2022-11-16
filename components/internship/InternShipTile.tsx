import React from "react";
import Link from "next/link";

interface InternShipProps {
    title: string
    link: string
    filename:string
}

function InternShipTile({title, link, filename}:InternShipProps) {
    return (
        <div className="flex aspect-video flex-col items-center bg-backgroundB border-primary border max-w-2xl p-8">
            <h1 className="font-serif text-primtextB">{title}</h1>
            <div className="grow"></div>
            <Link href={link}
                  className="border border-primary bg-primary p-4 text-primtext transition duration-300 ease-in-out hover:bg-primtext hover:text-primary"
                  download={filename}
                  target={"_blank"}
            >Download</Link>
        </div>
    );
}

export default InternShipTile;