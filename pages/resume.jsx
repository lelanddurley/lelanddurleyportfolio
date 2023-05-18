import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Leland | Resume</title>
        <meta
          name="description"
          content="I’m a Fullstack Developer specializing in building (and designing) cutting-edge digital experiences for customers, enterprises, and friends."
        />
        <link rel="icon" href="/signature3.svg" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Leland Durley</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/leland-durley-539109215/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/lelanddurley/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web/Mobile
              Development <span className="px-1">|</span> Complex
              Problem-Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          "As an analytical and innovative professional, I specialize in
          full-stack development, leveraging a deep foundation in customer
          service, team leadership, and business analysis. My mastery of both
          client-side and server-side rendering aligns with a profound passion
          for establishing and nurturing robust enterprises. Skilled at
          strategizing, troubleshooting, and optimizing operations, my
          versatility extends to proficiency in a myriad of front-end and
          back-end languages. Moreover, I remain committed to continuous
          learning, keen to embrace new technologies and methodologies as they
          arise. An empathetic and driven leader, my interpersonal acumen
          enables me to cultivate and maintain effective relationships within
          and beyond organizational boundaries, thereby furthering business
          success."
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <span className="font-bold py-2">Technical Skills</span>
          <p className="py-2 break-words">
            <span className="px-2"></span>HTML5
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>C#
            <span className="px-2">|</span>NextJS
            <span className="px-2">|</span>MySQL
            <span className="px-2">|</span>NoSQL
            <span className="px-2">|</span>Fortran
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>PostgreSQL
            <span className="px-2">|</span>.NET
          </p>
          <span className="font-bold py-2">Geo-redunant Storage</span>
          <p className="py-2 break-words">
            <span className="px-2"></span>Amazon Web Services
            <span className="px-2">|</span>Microsoft Azure
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Pixie</span>
            <span className="px-2">|</span>Sugar Land, TX
          </p>
          <p className="py-1 italic">
            Founder & Full Stack Developer (2020 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              industry-standard wireframes and design techniques.
            </li>
            <li>
              Leads developer meetings, Troubleshoots issues and concerns,
              configure operation and analytic plugins, and design changes as
              needed.
            </li>
            <li>
              Overee startup development, membership, and financials. Principal
              contact for vendors and enterprises.
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              Freelance Developer & Architect
            </span>
            <span className="px-2">|</span>Birmingham, AL
          </p>
          <p className="py-1 italic">
            Freelance Mobile & Web Full Stack Developer (2022 - Current)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and applications. Business
              analysis and software development skills were equally necessary to
              manage projects for clients.
            </li>
            <li>
              Private 1 on 1 coaching sessions related to web development. More
              specifically debugging, teaching basic web development concepts,
              and code reviews.
            </li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">TestSolace</span>
            <span className="px-2">|</span>Tuscaloosa, AL
          </p>
          <p className="py-1 italic">Front End Web Developer (2019 - 2021)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Researched and developed MLP Supervised Learning AI to acheieve
              minimum greediness (errors) for unique real-world scenarios.
            </li>
            <li>
              Worked directly with Namito Yakota to engineer an out of the box,
              and first of it's kind- "assessment assessor".
            </li>
            <li>
              Performed tens of thousands of simulated hours to test and
              refurbish the Neural Network. Utilized a mixture of careful
              mathematical expirmentation and backprobagation to finalize the
              product.
            </li>
          </ul>
        </div>
        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Momentum Telecom</span>
            <span className="px-2">|</span>Birmingham, AL
          </p>
          <p className="py-1 italic">UC Support Specialist (2021 – 2021)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Scheduled & Coordinated with customers regarding software,
              hardware, & VOIP problems to alleviate technical problems.
            </li>
            <li>
              Oversaw comprehensive understanding, management, and maintenance
              of user accounts using Salesforce's CRM. Upheld customer
              authentication as well as authorization.
            </li>
            <li>
              Increased teamm efficiencies by utilizing software principles from
              my background to streamline day-to-day activities. Collaboration
              was key for interdepartmental and intradepartmental communication.
            </li>
            <li>
              Partnered with the CTO to develop a unique, regression AI
              algorithm (based on the BERT model) to solve ticketing requests
              for any tier of an incoming problem(s).
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
