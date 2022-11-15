import React from "react";

interface WorkHeaderProps {
    heading: string;
    text: string;
}

function WorkHeader({ heading, text }: WorkHeaderProps) {
    return (
        <div className="max-w-5xl p-12">
            <h1 className="font-serif text-3xl sm:text-5xl leading-relaxed">{heading}</h1>
            <p className="py-12">{text}</p>
        </div>
    );
}

export default WorkHeader;
