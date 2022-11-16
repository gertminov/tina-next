import React from "react";
import WorkTile from "./WorkTile";
import Link from "next/link";
import MenuOffsetAnchor from "../MenuOffsetAnchor";

function Work() {
  const work = [
    {
      img: "/veganfood.webp",
      title: "Marketing concept for a vegan restaurant",
      description:
        'I created a marketing concept for fictional vegan restaurant called "Albert\'s...mehr als nur Grünzueg"in Künzelsau for students and young professionals. ',
      link: "/work/veganrestaurant",
    },
    {
      img: "/mercedes/cover.jpg",
      title: "Mercedes-Benz case study",
      description:
        "What does the Mercedes-Benz group need in order to generate and retain young employees alongside competitors such as Tesla?\n" +
        "For the outcome of the case study we designed two communication startegies.",
      link: "/work/mercedes",
    },
    {
      img: "/kalfs/cover.png",
      title: 'Media planning for the product launch of "S1" by KLAFS',
      description:
        "The focus of this project layed on the selection of suitable media and channels to promote the product launch of the new sauna of KLAFS.",
      link: "/work/klafs",
    },
    {
      img: "/maw.webp",
      title: "Promotion video for MAW Production",
      description:
        "Here, I created a promotion video about the service offerings of the company MAW Production.",
      link: "work/maw",
    },
  ];
  return (
    <div className="min-h-[90vh] bg-background p-6 sm:p-12 relative">
      <MenuOffsetAnchor id={"work"}/>
      <h1 className="font-serif text-primtext text-center mb-12">Work</h1>
      <div
        className={
          "grid grid-cols-1 xl:grid-cols-2  gap-8 justify-items-center"
        }
      >
        {work.map((entry) => (
          <WorkTile
            key={entry.title}
            title={entry.title}
            img={entry.img}
            description={entry.description}
            link={entry.link}
          />
        ))}
      </div>
      <div className="w-full flex justify-center pt-12">
        <Link
          href={"/internships"}
          className="mx-auto text-xl bg-primary px-12 py-2 text-primtext border border-primary hover:bg-backgroundB hover:text-primary transition duration-300 ease-in-out"
        >
          Reports of my Internships
        </Link>
      </div>
    </div>
  );
}

export default Work;