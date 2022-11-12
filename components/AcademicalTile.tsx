import React from 'react';

interface Tile {
    title:string
    date: string
    description: string
}

function AcademicalTile({title, date, description}:Tile) {
    return (
        <div className="basis-1/4">
            <div className=" mx-auto flex flex-col gap-4 items-center text-center w-60">
                <h4 className="text-xl">{title}</h4>
                <h4 className="text-xl">{date}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default AcademicalTile;