import Link from "next/link";
import Hero from "../components/Hero";
import IntroDuction from "../components/IntroDuction";
import Academical from "../components/Academical";
import Work from "../components/Work";
import Certificates from "../components/Certificates";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="h-full grow flex flex-col justify-between">
        <Hero/>
        <IntroDuction/>
        <Academical/>
        <Work/>
        <Certificates/>
        <Skills/>
        {/*<div id="home" className="h-80 bg-amber-600">home</div>*/}
        {/*<div id="about" className="h-64 bg-amber-600">about</div>*/}
        {/*<div id="work" className="h-64 bg-amber-600">work</div>*/}
        {/*<div id="contact" className="h-64 bg-amber-600"> contact</div>*/}
    </div>
  )
}
