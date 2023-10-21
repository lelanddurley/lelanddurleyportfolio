import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import moment from "moment";

const resume = () => {
  return (
    <>
      <Head>
        <title>Leland Durley | Resume</title>
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
              className="mr-4"
              aria-label="Leland's LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5 sm:w-8 sm:h-8" />
            </a>
            <a
              href="https://github.com/lelanddurley/"
              target="_blank"
              rel="noreferrer"
              className="mr-4"
              aria-label="Leland's GitHub"
            >
              <FaGithub className="w-5 h-5 sm:w-8 sm:h-8" />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Transformative Leadership <span className="px-1">|</span> Advanced Web & Mobile
              Development <span className="px-1">|</span> Strategic
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
          As an analytical and innovative professional, I specialize in
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
          success.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-4">Skills</h5>
          <span className="font-bold py-2">Programming Languages</span>
          <p className="py-2 break-words">
            HTML 5 | CSS 3 | JavaScript | C# | Java | Python | Fortran
          </p>
          <span className="font-bold py-2">Frameworks & Libraries</span>
          <p className="py-2 break-words">
            NextJS | Redis | ASP.NET | ReactJS | VueJS | Tailwind CSS | SCSS |
            TensorFlowJS | Bull | Gulp
          </p>
          <span className="font-bold py-2">Databases</span>
          <p className="py-2 break-words">MySQL | PostgreSQL | NoSQL</p>
          <span className="font-bold py-2">Design & Other Skills</span>
          <p className="py-2 break-words">
            Figma | Graphic design (Raster & Vector Images) | Microsoft Power BI
            | Perfomance testing
          </p>
          <span className="font-bold py-2">Cloud Technologies</span>
          <p className="py-2 break-words">
            Amazon Web Services | Microsoft Azure
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Inception Fertility</span>
            <span className="px-2">|</span>Houston, TX
            <span className="px-2">|</span>
            {jobDuration(moment("2023-04-10", "YYYY-MM-DD"))}
          </p>
          <p className="py-1 italic">Developer I (2023-Current)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Working as a crucial part of the Software Configuration Management
              (SCRM) team at a healthcare company, I apply my expertise as a
              Back-End Developer to optimize and enhance the company's websites
              and mobile applications (Android & iOS). I successfully utilize
              NodeJS and MSSQL to develop effective data interfaces, ensuring
              seamless performance across all platforms
            </li>
            <li>
              I contribute to both front-end and back-end development
              operations, implementing robust SQL queries to support API
              endpoints, conducting code reviews for efficiency, and
              innovatively solving web design issues to enhance usability and
              visual appeal
            </li>
            <li>
              I am deeply involved in the meticulous observation and stewardship
              of API performance and data layers, ensuring their optimal
              operation. As an integral part of the team, I seamlessly integrate
              third-party APIs into our system architecture, bolstering
              functionality. I work closely with our partners, fostering solid
              relationships and promoting smooth collaboration, which ultimately
              streamlines our operations. In addition, my contributions extend
              to the strategic planning and implementation of innovative AI
              projects, both internally and externally
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Pixie</span>
            <span className="px-2">|</span>Sugar Land, TX
            <span className="px-2">|</span> 2 yr 8 mo
          </p>
          <p className="py-1 italic">
            Founder & Full Stack Developer (2020 - 2023)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Implemented extensive mobile responsive user interface layouts,
              employing industry-standard wireframe and design methodologies to
              achieve a high-quality user experience
            </li>
            <li>
              Presided over developer meetings, adeptly identified and addressed
              software issues, adjusted operational and analytical plugins
              configuration as necessary, and orchestrated design alterations
              according to evolving requirements
            </li>
            <li>
              Oversaw the development, membership, and financial aspects of a
              startup. Functioned as the primary liaison for vendor and
              enterprise engagements, ensuring smooth collaboration and
              partnership
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
            <span className="px-2">|</span> 1 yr 1 mo
          </p>
          <p className="py-1 italic">
            Freelance Mobile & Web Full Stack Developer (2022 - 2023)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Collaborated directly with a varied client base to comprehend and
              deploy various technologies and applications. Employed both
              business analysis and software development skills to proficiently
              manage client projects
            </li>
            <li>
              Conducted private, one-on-one coaching sessions pertaining to web
              development, focusing specifically on debugging techniques,
              imparting fundamental web development concepts, and executing code
              showcases
            </li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">TestSolace</span>
            <span className="px-2">|</span>Tuscaloosa, AL
            <span className="px-2">|</span> 1 yr 3 mo
          </p>
          <p className="py-1 italic">Front End Web Developer (2019 - 2021)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Conducted comprehensive research and development of a Multilayer
              Perceptron (MLP) Supervised Learning AI system to optimize error
              minimization, tailoring its application to unique real-world
              scenarios
            </li>
            <li>
              Collaborated closely with Namito Yakota in the innovative
              engineering of a pioneering solution - the "Assessment Assessor"
            </li>
            <li>
              Executed tens of thousands of simulated testing hours to refine
              and enhance the Neural Network. Employed a rigorous combination of
              precise mathematical experimentation and backpropagation
              techniques to achieve product completion and readiness
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
            <span className="px-2">|</span> 3 mo
          </p>
          <p className="py-1 italic">UC Support Specialist (2021 – 2021)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Coordinated and collaborated with customers to resolve issues
              related to software, hardware, and VOIP systems, playing a crucial
              role in troubleshooting and enhancing technical functionality
            </li>
            <li>
              Managed and maintained user accounts through Salesforce's CRM,
              ensuring a comprehensive understanding of the platform while
              upholding rigorous standards for customer authentication and
              authorization
            </li>
            <li>
              Leveraged my foundational software principles to boost team
              efficiency and streamline routine activities. Played a pivotal
              role in fostering both intra and interdepartmental communication,
              promoting a collaborative work environment
            </li>
            <li>
              In collaboration with the CTO, designed and implemented a unique
              regression AI algorithm, based on the BERT model, to effectively
              manage and resolve ticketing requests across all levels of
              complexity
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const jobDuration = (startDate) => {
  const currentDate = moment();
  const years = currentDate.diff(startDate, "years");
  startDate.add(years, "years");

  const months = currentDate.diff(startDate, "months");
  startDate.add(months, "months");

  let result = "";
  if (years > 0) {
    result += `${years} yr `;
  }
  if (months > 0) {
    result += `${months} mo`;
  } else {
    result = "Just started";
  }
  return result;
};

export default resume;
