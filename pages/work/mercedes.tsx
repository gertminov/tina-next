import React from 'react';
import Fullpage from "../../components/Fullpage";
import WorkHeader from "../../components/work/WorkHeader";
import ImageGallery from "../../components/work/ImageGallery";

function Mercedes() {
    const images = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
    ]
    const header = "Mercedes-Benz case study"
    const text = "I worked on this case study in the module \"Product- and brand management\" in my 4th semester. " +
        "The question we had to answer was how can a german traditional company, like Mercedes-Benz," +
        " attract new employees and hold old to their current  ones in the frame of their competitive industry. " +
        "Throughout our work we focused on a concept for the younger generation since they have other expectiatons " +
        "on their work environemnt which can be served by company's like Waymo or Tesla. Therefore, we created an " +
        "external and an internal communication startegy. The external strategy consisted of using " +
        "video content as well as being present social media platforms with different types of content. " +
        "For the application process we wanted to use AI to check the cultural fit of the applicants. " +
        "For the internal communication strategy we thought of implementing the trend \"new work\" in " +
        "some departments with making some changes in the company's structure. Furthermore, " +
        "a bonus system and an e-learning plattform will set up. Here you can see some extracts of our presentation and ideas."
    return (
        <Fullpage>
            <WorkHeader heading={header} text={text}/>
            <ImageGallery images={images} path={"/mercedes/"} altText={"Mercedes case study"}/>
        </Fullpage>
    );
}

export default Mercedes;