import React from 'react';
import Link from "next/link";

function Footer() {
    return (
        <div className="w-full border-t border-primary pt-12">
            <div className="bg-backgroundB text-primtextB flex flex-col items-center p-8">
                <div>
                    <h1 className="font-serif text-2xl sm:text-4xl">valentinawerr@gmail.com</h1>
                    <div className="w-full flex justify-between p-4 ">
                        <Link href={"https://www.linkedin.com/in/valentina-werr-b28408253"} className="underline">LinkedIn</Link>
                        <Link href={"tel:+491713350985"} className="underline">Telephone</Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center bg-background text-primtext py-4">
                <div>
                    <Link href={"/cookies"} className="hover:underline px-8" scroll={true}>Cookies</Link>
                    <Link href={"/privacy"} className="hover:underline px-8" scroll={true}>Privacy policy</Link>
                </div>
                <p>© 2022 Valentina Werr</p>

            </div>
        </div>
    );
}

export default Footer;