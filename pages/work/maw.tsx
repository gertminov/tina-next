import React from "react";
import Fullpage from "../../components/Fullpage";
import WorkHeader from "../../components/work/WorkHeader";
import Link from "next/link";

function Maw() {
    const head = "Promotion video for MAW Production";
    const text =
        "At my internship at MAW Production, a media company in Fulda," +
        " I got the task to create a promotion video for their website for their new service: " +
        "the design and management of social media content. For the video I used the programm Vyond. " +
        "The video is still available on the homepage of MAW Production.";
    return (
        <Fullpage>
            <WorkHeader heading={head} text={text} />
            <div className="w-full border-t border-primary p-12">
                <div className="mx-auto flex  max-w-6xl justify-center">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/4tQnRZFW5mc"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                </div>
            </div>
        </Fullpage>
    );
}

export default Maw;
