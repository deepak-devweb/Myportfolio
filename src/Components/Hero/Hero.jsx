import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Hero() {
  const [typeEffect] = useTypewriter({
    words: ["Deepak Singh", " a Frontend Developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });

  return (
    <main className="h-[70vh] w-full flex">
      <div
        className="h-[70vh] w-auto flex flex-col gap-4 justify-center
       "
      >
        <h1 className="text-5xl my-3 mx-32 px-14 font-bold text-white "> Hi There!</h1>
        <h1 className="text-5xl mx-28 px-16 font-bold text-slate-400">
          {" "}
          I am {typeEffect}
        </h1>
        <p className="w-full text-xl my-3 mx-36 px-7 text-white">
        Hi there! I'm a passionate frontend developer with a <br /> mission to share my programming knowledge with the world.
        </p>
        <button  className=" h-14 w-36 mt-8 mx-40 rounded-full font-bold text-xl bg-blend-luminosity p-2 bg-white text-[#1d2e6d] animate-bounce shadow-lg shadow-blue-500 ">
          {" "}
        <a href="/src/Resume/Deepak Singh.pdf" download>
          RESUME       ↓
          </a>
        </button>
      </div>
      <div className=" h-full w-1/2 relative flex  items-center justify-center animate-pulse ">
        <div className=" h-96 w-96 rounded-full blur-md   bg-[#4c5ac3] flex items-center justify-center animate-pulse">
          <div className=" h-80 w-80 rounded-full blur-sm  flex items-center justify-center bg-[#4c5ac3">
            <div className=" h-72 w-72  rounded-full blur-sm bg-[#4c5ac3] animate-pulse"></div>
          </div>
        </div>

      </div>
    </main>
  );
}

export default Hero;
