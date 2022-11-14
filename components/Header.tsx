"use client";
import React, { useState } from "react";
import Link from "next/link";
import MenuLink from "./MenuLink";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed w-full flex-none h-[10vh] px-4 bg-backgroundB z-10 border-b border-black flex justify-between items-center">
      <div className="flex">
        <Link href={"/"} className="font-serif text-5xl h-full w-32">
          <svg
            fill="#000000"
            id="Ebene_1"
            data-name="Ebene 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 283.46 119.49"
          >
            <path
              className="cls-1"
              d="M30.14,38.58l11,6.33V32.25c0-1.3.47-1.95,1.42-1.95h2.75c.95,0,1.42.65,1.42,1.95V44.91l11-6.33A2.72,2.72,0,0,1,59,38.16a1.17,1.17,0,0,1,1.06.63l1.42,2.43a1.34,1.34,0,0,1,.16.63c0,.56-.39,1.07-1.16,1.53l-11,6.33,11,6.38c.77.49,1.16,1,1.16,1.53a1.34,1.34,0,0,1-.16.63l-1.42,2.43a1.17,1.17,0,0,1-1.06.63,2.72,2.72,0,0,1-1.32-.42l-11-6.33V67.22c0,1.3-.47,2-1.42,2H42.53c-1,0-1.42-.65-1.42-2V54.56l-11,6.33a2.55,2.55,0,0,1-1.32.48,1.16,1.16,0,0,1-1.06-.69l-1.37-2.43a1.37,1.37,0,0,1-.21-.68c0-.53.39-1,1.16-1.48l11-6.38-11-6.33c-.77-.42-1.16-.9-1.16-1.43a1.45,1.45,0,0,1,.21-.73l1.37-2.43a1.17,1.17,0,0,1,1.06-.63A2.79,2.79,0,0,1,30.14,38.58Z"
            />
            <path
              className="cls-1"
              d="M90.88,38.25l22.37,57.28L137.2,46.47a5.7,5.7,0,0,0,.68-2.48,3.08,3.08,0,0,0-.47-1.68,41.71,41.71,0,0,0-3.12-4.12l-2.58-3,6.54-5a1.32,1.32,0,0,1,.9-.37,1.85,1.85,0,0,1,1.16.53l4.32,4.43A4.81,4.81,0,0,1,146,38.3a8.24,8.24,0,0,1-.43,2.48,76.22,76.22,0,0,1-3.74,8.81L116,103.18a5.8,5.8,0,0,1-.74,1.37,1.4,1.4,0,0,1-.84.32h-8a1,1,0,0,1-.84-.42,5.08,5.08,0,0,1-.56-1.22c-.26-.7-.44-1.21-.55-1.53L84.55,46.32q-2.11-5.59-3.06-7.81A9.76,9.76,0,0,0,78.38,35a18.8,18.8,0,0,0-2.45-1.29,9.21,9.21,0,0,1-1.93-1,1.25,1.25,0,0,1-.63-.73.75.75,0,0,1-.16-.48.57.57,0,0,1,.1-.32.73.73,0,0,1,.64-.31H91.83a1.7,1.7,0,0,1,1,.31,2.33,2.33,0,0,1,.63.8.73.73,0,0,1,.06.26,1.49,1.49,0,0,1-.58,1c-.36.32-.75.66-1.19,1a3.36,3.36,0,0,0-1,1.35,3,3,0,0,0-.21,1.11A3.57,3.57,0,0,0,90.88,38.25Z"
            />
            <path
              className="cls-1"
              d="M148,92.74q5.81,0,5.8,4.59v4.32q0,4.55-5.8,4.54t-5.81-4.54V97.33Q142.15,92.74,148,92.74Z"
            />
            <path
              className="cls-1"
              d="M178.18,38.25l22.37,57.28,12.87-26.32-8.28-22.89c-.63-1.8-1.21-3.33-1.72-4.59s-.94-2.34-1.29-3.22A9.76,9.76,0,0,0,199,35a18.8,18.8,0,0,0-2.45-1.29,9.47,9.47,0,0,1-1.93-1,1.92,1.92,0,0,1-.68-.73,2.07,2.07,0,0,1-.06-.43,1.06,1.06,0,0,1,.06-.37.62.62,0,0,1,.63-.31h17.88a1.47,1.47,0,0,1,.9.31,1.72,1.72,0,0,1,.68.8.73.73,0,0,1,.06.26,1.49,1.49,0,0,1-.58,1c-.36.32-.75.66-1.19,1a3.46,3.46,0,0,0-1,1.35,3,3,0,0,0-.21,1.11,3.72,3.72,0,0,0,.37,1.53l7.55,19.3,5.43-11.08a6,6,0,0,0,.63-2.48,3.33,3.33,0,0,0-.42-1.68q-1.05-1.59-3.11-4.12l-2.64-3,6.59-5a1.32,1.32,0,0,1,.9-.37,1.85,1.85,0,0,1,1.16.53l4.33,4.43a4.85,4.85,0,0,1,1.37,3.48,8.21,8.21,0,0,1-.42,2.48,78.31,78.31,0,0,1-3.75,8.81l-7.28,15.08,12,30.86,23.95-49.06a6,6,0,0,0,.63-2.48,3.33,3.33,0,0,0-.42-1.68,51.89,51.89,0,0,0-3.17-4.12l-2.58-3,6.54-5a1.32,1.32,0,0,1,.9-.37,1.89,1.89,0,0,1,1.21.53l4.32,4.43a4.81,4.81,0,0,1,1.38,3.48,8.54,8.54,0,0,1-.42,2.48,78.31,78.31,0,0,1-3.75,8.81l-25.85,53.59a4,4,0,0,1-.79,1.37,1.14,1.14,0,0,1-.84.32h-7.92a.93.93,0,0,1-.84-.42,3.47,3.47,0,0,1-.58-1.22c-.25-.7-.42-1.21-.53-1.53l-9-25-12.82,26.53a4,4,0,0,1-.79,1.37,1.14,1.14,0,0,1-.84.32h-7.91a.93.93,0,0,1-.85-.42,3.47,3.47,0,0,1-.58-1.22c-.25-.7-.42-1.21-.53-1.53l-23-63.19A8.45,8.45,0,0,0,165.68,35a18.8,18.8,0,0,0-2.45-1.29,9.75,9.75,0,0,1-1.93-1,1.92,1.92,0,0,1-.68-.73,2,2,0,0,1-.05-.43,1.07,1.07,0,0,1,.05-.37.62.62,0,0,1,.63-.31h17.88a1.68,1.68,0,0,1,1,.31,2.51,2.51,0,0,1,.64.8,1,1,0,0,1,.05.26,1.45,1.45,0,0,1-.58,1c-.35.32-.75.66-1.19,1a3.34,3.34,0,0,0-1,1.35,2.78,2.78,0,0,0-.22,1.11A3.72,3.72,0,0,0,178.18,38.25Z"
            />
          </svg>
        </Link>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-12 pr-12">
          <li>
            <MenuLink href={"/"} name={"Home"} />
          </li>
          <li>
            <MenuLink href={"/#about"} name={"About Me"} />
          </li>
          <li>
            <MenuLink href={"/#work"} name={"Work"} />
          </li>
          <li>
            <MenuLink href={"/#contact"} name={"Contact"} />
          </li>
        </ul>
      </div>
      <button
        className="md:hidden"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        Menu
      </button>
      {showMenu && (
        <div className="fixed inset-0 h-screen w-screen bg-backgroundB z-60 md:hidden flex flex-col items-end ">
          <div className="h-[20vh] w-[20vh] flex justify-center">
            <button
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              className="mx-auto font-serif text-4xl"
            >
              X
            </button>
          </div>
          <div className="flex grow w-screen justify-center items-center">
            <div className="p-12">
              <ul className="flex flex-col gap-8 items-center text-3xl font-serif">
                <li>
                  <MenuLink href={"/"} name={"Home"} />
                </li>
                <li>
                  <MenuLink href={"/about"} name={"About Me"} />
                </li>
                <li>
                  <MenuLink href={"#work"} name={"Work"} />
                </li>
                <li>
                  <MenuLink href={"#contact"} name={"Contact"} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;