import Image from "next/image";
import Link from "next/link";
import React from "react";
import PixieImg from "../public/assets/projects/PixieImg.png";
import GeneologyProjectImg from "../public/assets/projects/GeneologyProjectPhoto.jpg";
import testsolaceImg from "../public/assets/projects/testsolacephoto.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#509beb]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Pixie"
            backgroundImg={PixieImg}
            projectUrl="/Pixie"
            tech="Next.JS"
          />
          <ProjectItem
            title="Genealogy Project"
            backgroundImg={GeneologyProjectImg}
            projectUrl="/Genealogy"
            tech="Next.JS"
          />
          <ProjectItem
            title="TestSolace"
            backgroundImg={testsolaceImg}
            projectUrl="/TestSolace"
            tech="TensorFlow"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
