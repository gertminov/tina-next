import MenuOffsetAnchor from "../MenuOffsetAnchor";
import CareerTile from "./CareerTile";

function Career() {
    const career = [
        {
            title: "Student job at \"Bausparkasse Schwäbisch Hall\"" ,
            date: "09/2023 – now",
            description: "Alongside my studies, I work in the department of corporate communications at to deepen my understanding of editorial and journalistic work."
        },
        {
            title: "Internship at \"nextMedia.Hamburg\"",
            date: "02/2023 – 08/2023",
            description: "For my Bachelor's degree, it was compulsory to complete an internship. I performed this at the location initiative nextMedia.Hamburg in the area of innovation management."
        },
        {
            title: "Internship at \"MAW Production\"",
            date: "07/2020 - 08/2020",
            description: "I worked for 6 weeks in the post production of a little film and media company in Fulda."
        },
        {
            title: "Internship at\n \"Die Zukunftsbauer \"",
            date: "10/2019-12/2019",
            description: "In this internship in Berlin I worked in the field of administration, distribution and eventmanagement.\n"
        },
    ]
    return (
        <div className=" w-full  p-12 bg-backgroundB flex flex-col items-center relative">
            <MenuOffsetAnchor id={"career"}/>
            <h1 className="font-serif">Career</h1>
            <div className="flex flex-wrap w-full mt-8 justify-around gap-24 sm:px-12 max-w-7xl ">
                {career.map(entry => (
                    <CareerTile
                        key={entry.title}
                        title={entry.title}
                        date={entry.date}
                        description={entry.description}
                    />
                ))}
            </div>


        </div>
    )

}

export default Career