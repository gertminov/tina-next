import React from 'react';
import Fullpage from "../../../components/Fullpage";
import WorkHeader from "../WorkHeader";
import ImageGallery from "../ImageGallery";

function Page() {
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
    const header = "Marketing concept for a vegan restaurant"
    const text = "This marketing concept was created in my 3rd semester in the module \"Marketing conception\"." +
        " Our task was to create a whole marketing concept for a fictional vegan restaurant in Künzelsau, " +
        "the city of my university. Therefore, we performed a situation analysis which contained of benchmarking, " +
        "a market analysis, a target group analysis and researched critical success factors for a " +
        "restaurant in order to conduct a competitor analysis. After that, we chose a target group " +
        "(students and young professionals) and formulated our stragey to make in the end a final marketing concept. " +
        "The result of this was our restaurant \"Albert's\" which was inspired by Albert Einstein " +
        "who decided in the last years of his life to follow a vegetarian diet. "
    return (
        <Fullpage>
            <WorkHeader heading={header} text={text}/>
            <ImageGallery images={images} path={"/vegan/"} altText={"Vegang restaurant project"}/>
        </Fullpage>
    );
}

export default Page;