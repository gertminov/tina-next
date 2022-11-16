import React from "react";
import Fullpage from "../../components/Fullpage";
import InternShipTile from "../../components/internship/InternShipTile";

function Index() {
    return (
        <Fullpage>
            <div className="max-w-5xl p-12">
                <h1 className="text-center font-serif text-3xl leading-relaxed sm:text-5xl">
                    Internshipts reports
                </h1>
                <p className="py-8 text-xl">
                    Here, you can take a look at my report of my finished
                    internships.
                </p>
            </div>
            <div className="h-full w-full border-t border-primary">
                <div className="mx-auto grid h-full max-w-7xl grid-cols-1 justify-items-center gap-4 p-12 md:grid-cols-2">
                    <InternShipTile
                        link={"/zb/zb_report.pdf"}
                        filename={"Praktikumszeignis Zukunftsbauer.pdf"}
                        title={"Die Zukunftsbauer"}
                    />
                    <InternShipTile
                        title={"MAW Production"}
                        link={"/maw/maw.pdf"}
                        filename={"MAW Praktikumsbescheinigung"}
                    />
                </div>
            </div>
        </Fullpage>
    );
}

export default Index;