import React from 'react';
import Link from "next/link";

interface LinkProps {
   href: string
   name: string
    action?: ()=> void
}

function MenuLink({href, name, action}:LinkProps) {
    return (
        <Link onClick={action} className="hover:border-opacity-100 border-opacity-0 border-b border-primary transition duration-300" scroll={true} href={href}>{name}</Link>
    );
}

export default MenuLink;