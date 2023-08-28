import React from "react";
import chakraImg from "../../public/img/chakraLanding.png";
import dashboardImg from "../../public/img/Dashboard.png";
import shopperImg from "../../public/img/shopper.png";
import travelImg from "../../public/img/travelBlog.png";
import ProjectStructure from "./ProjectStructure";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-3 my-24">
      <div className="max-w-[1240px] mx-auto">
        {/* title */}
        <div className="w-full me-auto">
          <h1 className="text-lg tracking-wide uppercase text-yellow-600">
            Projects
          </h1>
          <h2 className="text-4xl py-4 font-semibold">What I have built</h2>
        </div>
        {/* projects */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
          {/* chakra landing page project */}
          <ProjectStructure
            title={"LandingPage"}
            projectUrl={
              "https://next-landing-page-green.vercel.app/?fbclid=IwAR3I58AfXpiv5IaHGrUsH3QJp6X3FwrzAGOJI-DW9ya4_HbpIEkItA5LpV0"
            }
            imgUrl={chakraImg}
            build={"Next.js, Chakra"}
            data-aos="fade-right"
          />
          {/* Dashboard project */}
          <ProjectStructure
            title={"Admin Dashboard"}
            projectUrl={"https://shorturl.at/lsxU6"}
            imgUrl={dashboardImg}
            build={"React.js, TailwindCss, Mantine"}
            data-aos="fade-left"
          />
          {/* shopper project */}
          <ProjectStructure
            title={"Shopper Premium"}
            projectUrl={
              "https://shopper-liard.vercel.app/?fbclid=IwAR0yjAV_4EXijsAQ4nXG0DTqWDBa-wPf80G3oQenXf0a06uaulAqF4zksRc#"
            }
            imgUrl={shopperImg}
            build={"React.js, TailwindCss"}
            data-aos="fade-right"
          />
          {/* travelBlog project */}
          <ProjectStructure
            title={"Travel Blog"}
            projectUrl={
              "https://64c344a9a5096d2bdcf67c62--strong-semifreddo-279b6c.netlify.app/?fbclid=IwAR2pdy6Ir_tr-474mVeYTumRhtPgNa-gAZDSvqBKRgtlD41fyzmSzPIJddg"
            }
            imgUrl={travelImg}
            build={"React.js, TailwindCss"}
            data-aos="fade-left"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
