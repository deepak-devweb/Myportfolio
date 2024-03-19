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
        className="h-[70vh] w-1/2 flex flex-col gap-4 justify-center
       "
      >
        <h1 className="text-4xl px-14 font-bold text-white ">Hi There!</h1>
        <h1 className="text-4xl px-16 font-bold text-white">
          {" "}
          I am {typeEffect}
        </h1>
        <p className="text-xl px-7 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias sed
          eius nihil dolor aliquam quibusdam officiis tenetur maiores harum,
          ratione enim repellendus sapiente numquam repudiandae!
        </p>
        <button className=" h-14 w-32 mt-5 mx-16 rounded-xl font-medium text-2xl bg-blend-luminosity bg-slate-300 text-black animate-bounce ">
          {" "}
          Resume{" "}
        </button>
      </div>
      <div className=" h-full w-1/2 relative flex  items-center justify-center animate-pulse ">
        <div className=" h-96 w-96 rounded-full blur-md   bg-blue-800 flex items-center justify-center animate-pulse">
          <div className=" h-80 w-80 rounded-full blur-sm  flex items-center justify-center bg-blue-700">
            <div className=" h-72 w-72  rounded-full blur-sm bg-blue-600 animate-pulse"></div>
          </div>
        </div>
       
      </div>
    </main>
  );
}

export default Hero;
