import React from "react";
import Image from "next/image";
import Fullpage from "../../components/Fullpage";
import WorkHeader from "../../components/work/WorkHeader";
import ImageGallery from "../../components/work/ImageGallery";

function Index() {
    const images = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const text =
        'In my module "Cross media management" ' +
        "I worked on a media planning including a budget calculation for the product launch of the sauna" +
        ' "S1" of KLAFS. The special feature of this sauna is that it basically fits in every ' +
        'appartment - the sauna "S1" can be retracted and extended. So for the first steps we ' +
        "had to analyze the potential target groups for whom this speciality could be interesting. After " +
        "that we continued with the analysis of the medial behaviour of the target group in order to find " +
        "the best platforms to advertise on. On the base of this we created a media strategy and a dispersal plan.";
    const heading = 'Media planning for the product launch of "S1" by KLAFS';


    return (
        <Fullpage>
            <WorkHeader heading={heading} text={text} />
            <ImageGallery images={images} path={"/kalfs/"} ext={".jpg"} altText={"Kalfs Sauna Project"}/>
        </Fullpage>
    );
}

export default Index;
