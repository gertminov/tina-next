import React from 'react';

interface Tile {
    title:string
    date: string
    description: string
}

function AcademicalTile({title, date, description}:Tile) {
    return (
        <div className="flex flex-col gap-2 items-center text-center w-52 m-4 ">
            <h4 className="text-xl">{title}</h4>
            <h4 className="text-xl">{date}</h4>
            <p>{description}</p>
        </div>
    );
}

export default AcademicalTile;