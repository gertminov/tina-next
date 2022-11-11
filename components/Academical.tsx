import React from 'react';
import AcademicalTile from "./AcademicalTile";

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
            title: "Internship at \"MAW Production\"",
            date: "07/2020 - 08/2020",
            description: "I worked for 6 weeks in the post production of a little film and media company in Fulda."
        },
        {
            title: "Internship at \"Die Zukunftsbauer \"",
            date: "10/2019-12/2019",
            description: "In this internship in Berlin I worked in the field of administration, distribution and eventmanagement.\n"
        },
        {
            title: "Marienschule Fulda",
            date: "2012-2019",
            description: "I passed my A-levels at this school with a grade point average of 2.4. My advanced courses were English and Politics & Economy."
        }
    ]
    return (
        <div className=" w-full min-h-[90vh]  p-12 bg-backgroundB flex flex-col items-center">
            <h1>Academical career</h1>
            <div className="flex flex-wrap w-full mt-8 justify-around gap-12 px-12">
                {academics.map(entry => (<AcademicalTile key={entry.title} title={entry.title} date={entry.date} description={entry.description}/>))}
            </div>


        </div>
    );
}

export default Academical;