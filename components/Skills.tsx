import React from 'react';
import SkillTile from "./SkillTile";

function Skills() {
    const skilz = [
        {
            name: "MS PowerPoint",
            img: "/TinaFoto.jpg"
        }
    ]
    return (
        <div>
            {skilz.map(entry => (<SkillTile img={entry.img} name={entry.name} key={entry.name}/>))}
        </div>
    );
}

export default Skills;