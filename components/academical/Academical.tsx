import React from 'react';
import AcademicalTile from "./AcademicalTile";
import MenuOffsetAnchor from "../MenuOffsetAnchor";

function Academical() {
    const academics = [
        {
            title: "semster abroad in Rotterdam",
            date: "08/2022 - 02/2023",
            description: "As an Erasmus student I spent  half year at the Rotterdam Business School studying \"Digital Marketing\"."
        },
        {
            title: "Rheinhold-Würth-Hochschule Künzelsau",
            date: "since 10/2020",
            description: "Since October 2020 I am studying \"business administration, marketing and media management\""
        },
        {
            title: "Marienschule Fulda",
            date: "2012-2019",
            description: "I passed my A-levels at this school with a grade point average of 2.4. My advanced courses were English and Politics & Economy."
        },
    ]
    return (
        <div className=" w-full   p-12 bg-backgroundB flex flex-col items-center relative">
            <MenuOffsetAnchor id={"acedemics"}/>
            <h1 className="font-serif">Education</h1>
            <div className="flex flex-wrap w-full my-8 justify-around gap-24 sm:px-12 max-w-7xl ">
                {academics.map(entry => (<AcademicalTile key={entry.title} title={entry.title} date={entry.date} description={entry.description}/>))}
            </div>


        </div>
    );
}

export default Academical;