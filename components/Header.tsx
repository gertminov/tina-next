import React from 'react';
import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <div className="w-full flex-none h-[10vh] px-4 border-b border-black flex justify-between items-center">
            <div>
                <Image src={"/vercel.svg"} width={100} height={200} alt={"logo"}/>
            </div>
            <div className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/about">About Me</Link>
                <Link href="/#work">Work</Link>
                <Link href="#contact">Contact</Link>
            </div>
        </div>
    );
}

export default Header;