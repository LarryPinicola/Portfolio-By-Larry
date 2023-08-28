import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectStructure = ({ title, projectUrl, imgUrl, build }) => {
  return (
    <div className="flex flex-col gap-5 ">
      <Link href={projectUrl} target="_blank">
        <div className="shadow-xl rounded-lg hover:scale-105 ease-in-out duration-300 p-2">
          <Image alt="projectImg" src={imgUrl} className="w-full h-full" />
        </div>
      </Link>
      {/* title */}
      <div className="flex flex-col items-center gap-1 text-blue-600">
        <h1 className="text-xl tracking-wide font-semibold">{title}</h1>
        <p className="text-gray-600 text-sm">{build}</p>
      </div>
    </div>
  );
};

export default ProjectStructure;
