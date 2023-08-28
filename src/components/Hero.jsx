import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div id="hero" className="w-full lg:h-screen text-center my-32">
      <div className="max-w-[1024px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="">
          <p className="uppercase tracking-widest text-gray-600 text-sm">
            let us build something together
          </p>
          <h1 className="text-gray-700 text-4xl lg:text-5xl font-semibold py-3 tracking-tight">
            Hi, I am <span className="text-blue-800">Zwe Kyaw Htet</span>
          </h1>
          <h1 className="text-gray-700 text-4xl lg:text-5xl font-semibold py-1 tracking-tight">
            A Front-End Web Developer
          </h1>
          <p className="text-sm md:text-base lg:text-base text-gray-700 py-3 max-w-[85%] lg:max-w-[70%] m-auto">
            I am a creative Frontend Developer, I can create different and
            creative websites.
          </p>
          {/* social icons  */}
          <div className="flex items-center justify-between max-w-[330px] m-auto py-3">
            <a
              href="https://github.com/LarryPinicola"
              target="_blank"
              className=""
            >
              <div className="rounded-full shadow-lg bg-blue-800 shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in-out duration-200">
                <FaGithub className="text-white text-xl" />
              </div>
            </a>

            <div className="rounded-full shadow-lg bg-blue-800 shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in-out duration-200">
              <FaTwitter className="text-white text-xl" />
            </div>
            <a href=""></a>
            <div className="rounded-full shadow-lg bg-blue-800 shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in-out duration-200">
              <FaLinkedin className="text-white text-xl" />
            </div>
            <div className="rounded-full shadow-lg bg-blue-800 shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in-out duration-200">
              <FaInstagram className="text-white text-xl" />
            </div>
            <div className="rounded-full shadow-lg bg-blue-800 shadow-gray-400 p-4 cursor-pointer hover:scale-125 ease-in-out duration-200">
              <FaFacebook className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
