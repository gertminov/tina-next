import React from "react";
import MenuOffsetAnchor from "./MenuOffsetAnchor";

function Hero() {
  return (
    <div className="h-screen grid place-content-center p-8 snap-start relative">
        <MenuOffsetAnchor id={"hero"}/>
      <div className="text-center max-w-5xl">
        <h1 className="font-serif text-6xl lg:text-9xl">Valentina Werr</h1>
        <h3 className="font-serif text-3xl">
          business administration student focusing on marketing and media
          management
        </h3>
      </div>
    </div>
  );
}

export default Hero;