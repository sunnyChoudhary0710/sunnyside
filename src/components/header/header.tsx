"use client";
import { useEffect, useState } from "react";
import Link from "../link/link";

const Header = () => {
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);
  const openPanel = () => {
    setIsHeaderOpen(!isHeaderOpen);
  };
  useEffect(() => {
    console.log(isHeaderOpen);
  }, [isHeaderOpen]);
  return (
    <>
      <header className="z-30 bg-port-yellow-light px-0 md:px-4 lg:h-24 lg:px-4 sm:px-0 flex justify-between items-center border-b-2 border-b-rose-50 max-w-screen-2xl m-auto">
        <div className="h-auto flex items-center p-2">
          <img
            className="w-20 h-auto object-contain cursor-pointer transition-transform hover:rotate-12 hover:scale-125"
            src="/logo.webp"
            alt="Sunny Side"
          />
        </div>
        <div
          onClick={openPanel}
          className="flex flex-col justify-center items-center z-10 gap-1 w-14 h-14 mx-4 rounded-full transition-all hover:cursor-pointer hover:bg-slate-50 md:hidden"
        >
          <span
            className={`w-6 h-1 bg-port-yellow-dark rounded-md transition-all ${
              isHeaderOpen ? "transform-gpu origin-left rotate-45 w-7" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-1 bg-port-yellow-dark rounded-md transition-all ${
              isHeaderOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-1 bg-port-yellow-dark rounded-md transition-all ${
              isHeaderOpen ? "transform-gpu origin-left -rotate-45 w-7" : ""
            }`}
          ></span>
        </div>

        <nav className="md:flex gap-10 h-auto items-center hidden font-bold">
          <a className="port-nav port-nav-hover">Projects</a>
          <a className="port-nav port-nav-hover">About</a>
          <a className="port-nav port-nav-hover">Career</a>
          <a className="port-nav port-nav-hover">Interests</a>
          <a className="port-nav port-nav-hover" href="/Sunny_Resume_2023.pdf">Download Resume</a>
        </nav>
      </header>
      <div
        className={`absolute min-h-screen h-full w-screen z-30 bg-port-yellow-ultra-light transition-all ease-out duration-500  ${
          isHeaderOpen ? "transform-gpu translate-x-[0%]" : "translate-x-full"
        } flex flex-col gap-20 text-port-yellow-dark text-7xl px-16 py-11 items-center text-center`}
      >
        <a className="relative inline-flex justify-center items-center rounded-full w-auto p-1 transition-all duration-300 mob-port-nav-hover">Projects</a>
        <a className="relative inline-flex justify-center items-center rounded-full w-auto p-1 transition-all duration-300 mob-port-nav-hover">Career</a>
        <a className="relative inline-flex justify-center items-center rounded-full w-auto p-1 transition-all duration-300 mob-port-nav-hover">Interests</a>
        <a className="relative inline-flex justify-center items-center rounded-full w-auto p-1 transition-all duration-300 mob-port-nav-hover" href="/Sunny_Resume_2023.pdf">Download Resume</a>
      </div>
    </>
  );
};

export default Header;
