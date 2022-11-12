import React from 'react';
import SkillTile from "./SkillTile";

function Skills() {
    const skilz = [
        {
            name: "MS PowerPoint",
            img: "/icons/ms-powerpoint.svg"
        },
        {
            name: "MS Word",
            img: "/icons/ms-word.svg"
        },
        {
            name: "MS Excel",
            img: "/icons/ms-excel.svg"
        },
        {
            name: "Canva",
            img: "/icons/canva.svg"
        }
    ]
    return (
        <div className="p-12 bg-background flex flex-col justify-center items-center">
            <h1 className="font-serif text-primtext text-center mb-12">Skills</h1>
            <div className="flex flex-wrap w-full  px-12 justify-around gap-12 max-w-7xl ">
                {skilz.map(entry => (<SkillTile img={entry.img} name={entry.name} key={entry.name}/>))}
            </div>
        </div>
    );
}

export default Skills;