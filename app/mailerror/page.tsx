import React from 'react';
import Link from "next/link";

function Page() {
    return (
        <div className="flex grow flex-col items-center justify-center gap-12">
            <div className="h-[10vh]"></div>
            <h1 className="font-serif">Something went wrong on our end :(</h1>
            <h3>You can still send me a mail via</h3>
            <h3>valentinawerr@gmail.com</h3>
            <Link
                href={"/"}
                className="border border-primary bg-primary p-4 text-primtext transition duration-300 ease-in-out hover:bg-primtext hover:text-primary"
            >
                Back
            </Link>
        </div>
    );
}

export default Page;