import Hero from "../components/Hero";
import IntroDuction from "../components/IntroDuction";
import Academical from "../components/academical/Academical";
import Work from "../components/work/Work";
import Certificates from "../components/certificates/Certificates";
import Skills from "../components/Skills";
import Contact from "../components/contact/Contact";

export default function Home() {
  return (
    <>
        <Hero/>
        <IntroDuction/>
        <Academical/>
        <Work/>
        <Certificates/>
        <Skills/>
        <Contact/>
    </>
  )
}
