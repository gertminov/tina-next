import React from 'react';
import Fullpage from "../../components/Fullpage";
import WorkHeader from "../work/WorkHeader";
import InternShipTile from "./InternShipTile";

function Page() {
    return (
        <Fullpage>
            <div className="max-w-5xl p-12">
                <h1 className="font-serif text-3xl text-center sm:text-5xl leading-relaxed">Internshipts reports</h1>
                <p className="py-8 text-xl">Here, you can take a look at my report of my finished internships.</p>
            </div>
            <div className="w-full h-full border-t border-primary">
                <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl h-full justify-items-center p-12">
                    <InternShipTile link={"/zb/zb_report.pdf"} filename={"Praktikumszeignis Zukunftsbauer.pdf"} title={"Die Zukunftsbauer"}/>
                    <InternShipTile title={"MAW Production"} link={"/maw/maw.pdf"} filename={"MAW Praktikumsbescheinigung"}/>

                </div>
            </div>
        </Fullpage>
    );
}

export default Page;