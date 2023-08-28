import Image from "next/image";
import React from "react";
import contactMe from "../../public/img/contact.png";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { PiArrowFatLineUpBold } from "react-icons/pi";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen p-3">
      <div className="max-w-[1240px] m-auto py-16 w-full" data-aos="zoom-out">
        {/* title */}
        <div className="w-full me-auto">
          <h1 className="text-lg tracking-wide uppercase text-yellow-600">
            Contact
          </h1>
          <h2 className="text-4xl py-4 font-semibold">Get In Touch</h2>
        </div>
        <div className="grid lg:grid-cols-5 gap-5">
          {/* left, img n my information */}
          <div className="col-span-3 lg:col-span-2 h-full shadow-xl rounded-lg p-4">
            <div className="">
              {/* image */}
              <div className=" ">
                <Image
                  alt="contact"
                  src={contactMe}
                  // width={300}
                  // height={300}
                  className="w-full h-full rounded-lg"
                />
              </div>
              {/* my info */}
              <div className="">
                <h1 className="text-2xl tracking-wide font-semibold">
                  Zwe Kyaw Htet
                </h1>
                <p className="py-1">Frontend Developer</p>
                <p className="text-xs text-gray-600 tracking-wide">
                  I am currently open to both freelance opportunities and
                  full-time positions. If you wish to discuss potential
                  collaborations or opportunities, please feel free to reach out
                  to me. Looking forward to connecting and exploring how I can
                  contribute to your projects.
                </p>
              </div>
              {/* social media icons */}
              <div className="flex items-center justify-between pt-5">
                <h1 className="text-sm font-semibold text-blue-800">
                  Let's Connect Together
                </h1>
                <a
                  href="https://github.com/LarryPinicola"
                  target="_blank"
                  className=""
                >
                  <div className="rounded-full shadow-lg bg-blue-800 p-1 md:p-2 cursor-pointer hover:scale-110 ease-in-out duration-200">
                    <FaGithub className="text-white text-xl" />
                  </div>
                </a>
                <div className="rounded-full shadow-lg bg-blue-800 p-1 md:p-2 cursor-pointer hover:scale-110 ease-in-out duration-200">
                  <FaTwitter className="text-white text-xl" />
                </div>
                <a
                  href="https://www.linkedin.com/in/zwe-kyaw-htet-770981278/"
                  className=""
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg bg-blue-800 p-1 md:p-2 cursor-pointer hover:scale-110 ease-in-out duration-200">
                    <FaLinkedin className="text-white text-xl" />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/larrylemondio?fbclid=IwAR0FRObcNeT815tkd-D6mWEm1bp0phXPPgcz2n0lS2iPoI_qyEatJ1IkYYI"
                  className=""
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg bg-blue-800 p-1 md:p-2 cursor-pointer hover:scale-110 ease-in-out duration-200">
                    <FaInstagram className="text-white text-xl" />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100048894316138"
                  className=""
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg bg-blue-800 p-1 md:p-2 cursor-pointer hover:scale-110 ease-in-out duration-200">
                    <FaFacebook className="text-white text-xl" />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* right, form w/ contact */}
          <div className="col-span-3 w-full h-full shadow-xl rounded-lg lg:p-4">
            <div className="p-2 ">
              {/*  */}
              <form action="" className="">
                {/* name n phone only */}
                <div className="grid md:grid-cols-2 gap-4 w-full py-1">
                  {/* name */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase text-sm py-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="rounded-lg p-2 border border-gray-400 outline-none"
                    />
                  </div>
                  {/* phone */}
                  <div className="flex flex-col">
                    <label htmlFor="phone" className="uppercase text-sm py-1">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      id="phone"
                      className="rounded-lg p-2 border border-gray-400 outline-none"
                    />
                  </div>
                </div>
                {/* the rest of the form */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="uppercase text-sm py-1">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="rounded-lg p-2 outline-none border border-gray-400"
                  />
                </div>
                <div className="flex flex-col py-1">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name=""
                    id="message"
                    rows="6"
                    className="border border-gray-400 outline-none p-2 rounded-lg"
                  ></textarea>
                </div>
                <button className="w-full p-2 mt-5 rounded-lg bg-blue-500">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* pull up btn */}
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full p-3 shadow-xl cursor-pointer hover:scale-105 ease-in-out duration-300 bg-blue-400">
              <PiArrowFatLineUpBold />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
