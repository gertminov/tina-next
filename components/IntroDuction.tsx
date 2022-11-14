import React from "react";
import Image from "next/image";
import Link from "next/link";

function IntroDuction() {
  return (
    <div className="flex min-h-screen snap-center bg-background p-12 md:min-h-[90vh]">
      <div className="flex w-full grow flex-row-reverse flex-wrap bg-white">
        <div className="relative h-48 basis-full bg-red-400 md:h-full  md:basis-1/3">
          <Image
            src={"/TinaFoto.jpg"}
            sizes="80vw, 30vw"
            fill
            className="object-cover"
            alt={"photo of Valentina Werr"}
          />
        </div>
        <div className="flex h-full basis-full place-content-center p-8 md:basis-2/3 md:p-12 ">
          <div className="flex max-w-lg flex-col gap-8 md:justify-center">
            <div className="">
              <h1 className="font-serif text-5xl">Hello,</h1>
              <h3 className="font-serif">my name is Valentina</h3>
            </div>
            <p className="text-lg leading-8">
              I am a business administration student with a focus on marketing
              and media management. My creative head is driven by thinking
              outside the box. I am a marketing and trend enthusiast, looking
              for new adventures in the field of media management, digital
              marketing and data analysis.
            </p>
            <div className="mx-auto mt-8">
              {/*<Button onClick={() => {}} text={"Download CV"} />*/}
              <Link
                href={"/CV_VW.pdf"}
                download={"CV_VWerr.pdf"}
                target={"_blank"}
                className="border border-primary bg-primary p-4 text-primtext transition duration-300 ease-in-out hover:bg-primtext hover:text-primary"
              >
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroDuction;