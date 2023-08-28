"use client";
import helloImg from "../../public/img/LarryAgain.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full lg:h-screen p-3 my-32 ">
      <div
        data-aos="zoom-in-up"
        className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-10 items-center"
      >
        {/* left side */}
        <div className="col-span-2">
          <h1 className="text-lg tracking-widest uppercase text-yellow-600">
            About
          </h1>
          <h2 className="text-4xl py-4 font-semibold">Who I Am</h2>
          <p className="tracking-wide text-sm py-2 leading-6 ">
            I am a young enthusiast driven by a strong passion for designing
            captivating websites and creating compelling content. The world of
            web development is vast, with numerous languages, libraries, and
            framework to explore and master.Staying updated with the latest tech
            trends has become a daily habit. In essence, my path is all about
            continuous learning, fueled by my love for technology, design, and
            teamwork. With every website I create, I embrace the joy of turning
            ideas into reality.
          </p>
        </div>
        {/* right side */}
        <div className="hover:scale-105 ease-in-out duration-200 mt-5 w-[80%] py-1 mx-auto ">
          <Image
            alt="img"
            // width={200}
            // height={200}
            src={helloImg}
            className="rounded-lg shadow-xl w-[60%] h-auto mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
