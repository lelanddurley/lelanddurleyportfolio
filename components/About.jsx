import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#509beb]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            As an experienced professional, I specialize in creating
            mobile-responsive front-end user interfaces and integrating APIs
            with backend technologies. I am adept in developing full-stack
            applications using HTML/CSS, JavaScript, React, and PostgreSQL.
            However, I firmly believe in choosing the best tool for the task at
            hand, not restricting myself to a specific language. My journey into
            web development began in 2019, since then, I have worked on numerous
            collaborative ventures, creating various applications and e-commerce
            websites. Currently, I am working as a Back-end Software Developer
            for a company in the Healthcare Industry.
          </p>
          <p className="py-2 text-gray-600">
            My hands-on experience ranges from client interactions and wireframe
            translation to application deployment. Aside from my work, I
            dedicate time to explore new frameworks, refine my graphic design
            skills, and expand my knowledge of backend languages. This
            dedication ensures I stay up-to-date, ready to deliver robust
            solutions for diverse challenges.
          </p>
          <Link href="/projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
