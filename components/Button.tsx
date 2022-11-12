'use client'
import React from 'react';

interface myButton {
    onClick: ()=> void
    text: string
}

function Button({onClick, text}:myButton) {
    return (
        <button className="bg-primary text-primtext hover:bg-primtext hover:text-primary border border-primary transition duration-300 ease-in-out p-4" onClick={onClick}>{text}</button>
    );
}

export default Button;