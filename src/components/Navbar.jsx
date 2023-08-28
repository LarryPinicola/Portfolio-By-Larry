"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full h-20 shadow-xl z-[10] fixed top-0 bg-white">
      <div className="flex justify-between w-full h-full px-6 2xl:px-16 items-center">
        <Link href={"/"}>
          <div className="text-3xl font-semibold cursor-pointer tracking-tighter">
            <h1 className="hover:text-blue-950 duration-300">
              Larry/<span className="text-yellow-600">Lemondio</span>{" "}
            </h1>
          </div>
        </Link>

        <ul className="hidden md:flex items-center">
          <Link href="/">
            <li className="hover:scale-125 duration-100 uppercase text-sm ml-10">
              Home
            </li>
          </Link>
          <Link href="/#about">
            <li className="hover:scale-125 duration-100 uppercase text-sm ml-10">
              About
            </li>
          </Link>
          <Link href="/#skills">
            <li className="hover:scale-125 duration-100 uppercase text-sm ml-10">
              Skills
            </li>
          </Link>
          <Link href="/#projects">
            <li className="hover:scale-125 duration-100 uppercase text-sm ml-10">
              Projects
            </li>
          </Link>
          <Link href="/#contact">
            <li className="hover:scale-125 duration-100 uppercase text-sm ml-10">
              Contact
            </li>
          </Link>
        </ul>

        <div
          onClick={handleNav}
          className=" text-black cursor-pointer md:hidden"
        >
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* Mobile Nav */}

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
          }
        >
          <div className="flex justify-between items-center">
            <div className="text-2xl font-semibold cursor-pointer tracking-tighter">
              <h1 className="text-blue-950">ZweKyawHtet </h1>
            </div>
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 cursor-pointer p-2"
            >
              <AiOutlineClose />
            </div>
          </div>

          <div className="border-b border-gray-300 my-6">
            <p className="text-sm w-[85%] md:w-[90%] pb-3">
              Let's create together
            </p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase ">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-yellow-700"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-yellow-700"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-yellow-700"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-yellow-700"
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm text-yellow-700"
                >
                  Contact
                </li>
              </Link>
            </ul>
            {/* Social Network */}

            <div className="pt-56">
              <p className="uppercase mt-10 font-normal tracking-wide text-blue-900">
                Let&#39;s Connect together
              </p>
            </div>

            <div className="flex items-center justify-between my-10 w-full">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/zwe-kyaw-htet-770981278/"
                className=""
              >
                <div className="rounded-full shadow-lg bg-blue-700 shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in-out duration-200">
                  <FaLinkedin className="text-white" />
                </div>
              </a>
              <a
                href="https://github.com/LarryPinicola"
                className=""
                target="_blank"
              >
                <div className="rounded-full shadow-lg bg-gray-600 shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in-out duration-200">
                  <FaGithub className="text-white" />
                </div>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/larrylemondio?fbclid=IwAR0FRObcNeT815tkd-D6mWEm1bp0phXPPgcz2n0lS2iPoI_qyEatJ1IkYYI"
                className=""
              >
                <div className="rounded-full bg-gradient-to-r from-red-600 to-yellow-400 shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in-out duration-200">
                  <FaInstagram className="text-white" />
                </div>
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100048894316138"
                className=""
              >
                <div className="rounded-full bg-blue-700 shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in-out duration-200">
                  <FaFacebook className="text-white" />
                </div>
              </a>
              <a href="" className="" target="_blank">
                <div className="rounded-full bg-blue-400 shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-105 ease-in-out duration-200">
                  <FaTwitter className="text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
