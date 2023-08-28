import Image from "next/image";
import React from "react";
import htmlImg from "../../public/img/html.png";
import cssImg from "../../public/img/css.png";
import jsImg from "../../public/img/javascript.png";
import reactImg from "../../public/img/react.png";
import nextImg from "../../public/img/nextjs.png";
import bsImg from "../../public/img/bootstrap-logo.png";
import tailwindImg from "../../public/img/tailwind.png";
import gitImg from "../../public/img/github1.png";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-3 my-32">
      <div data-aos="fade-up"
     data-aos-duration="3000" className="max-w-[1240px] mx-auto h-auto flex flex-col justify-center items-center">
        {/* title */}
        <div className="w-full me-auto">
          <h1 className="text-lg tracking-wide uppercase text-yellow-600">
            Skills
          </h1>
          <h2 className="text-4xl py-4 font-semibold">What I can Do</h2>
        </div>
        {/* skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mt-5 w-full">
          {/* html */}
          <div className="p-2 shadow-xl rounded-lg hover:scale-105 ease-in duration-300 flex flex-col items-center gap-3">
            <div className="">
              <Image alt="html" src={htmlImg} width={80} height={80} />
            </div>
            <div className="font-semibold">
              <h1 className="">HTML</h1>
            </div>
          </div>
          {/* css */}
          <div className="p-2 shadow-xl rounded-lg hover:scale-105 ease-in duration-300 flex flex-col items-center gap-3">
            <div className="">
              <Image alt="css" src={cssImg} width={80} height={80} />
            </div>
            <div className="font-semibold">
              <h1 className="">CSS</h1>
            </div>
          </div>
          {/* js */}
          <div className="p-2 shadow-xl rounded-lg hover:scale-105 ease-in duration-300 flex flex-col items-center gap-3">
            <div className="">
              <Image alt="js" src={jsImg} width={80} height={80} />
            </div>
            <div className="font-semibold">
              <h1 className="">Javascript</h1>
            </div>
          </div>
          {/* reactjs */}
          <div className="p-2 shadow-xl rounded-lg hover:scale-105 ease-in duration-300 flex flex-col items-center gap-3">
            <div className="">
              <Image alt="html" src={reactImg} width={80} height={80} />
            </div>
            <div className="font-semibold">
              <h1 className="">React.Js</h1>
            </div>
          </div>
          {/* nextjs */}
          <div className="p-2 shadow-xl rounded-lg hover:scale-105 ease-in duration-300 flex flex-col items-center gap-3">
            <div className="">
              <Image alt="next" src={nextImg} width={80} height={80} />
            </div>
            <div className="font-semibold">
              <h1 className="">Next.Js</h1>
            </div>
          </div>
          {/* tailwind */}
          <div className="p-2 shadow-xl rounded-lg hover:scale-105 ease-in duration-300 flex flex-col items-center gap-3">
            <div className="">
              <Image alt="tailwind" src={tailwindImg} width={80} height={80} />
            </div>
            <div className="font-semibold">
              <h1 className="">TailwindCss</h1>
            </div>
          </div>
          {/* bootstrap */}
          <div className="p-2 shadow-xl rounded-lg hover:scale-105 ease-in duration-300 flex flex-col items-center gap-3">
            <div className="">
              <Image alt="bootstrap" src={bsImg} width={80} height={80} />
            </div>
            <div className="font-semibold">
              <h1 className="">Bootstrap</h1>
            </div>
          </div>
          {/* github */}
          <div className="p-2 shadow-xl rounded-lg hover:scale-105 ease-in duration-300 flex flex-col items-center gap-3">
            <div className="">
              <Image alt="git" src={gitImg} width={80} height={80} />
            </div>
            <div className="font-semibold">
              <h1 className="">Github</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
