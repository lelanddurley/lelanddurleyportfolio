import Image from "next/image";
import React from "react";
import InceptionImg from "../public/assets/projects/inception_Logo.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const InceptionDevelopment = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={InceptionImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Inception Fertility LLC</h2>
          <h3>JavaScript / VueJS / AWS / SQL</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
  At Inception Fertility LLC, I play an instrumental role in an ambitious digital transformation project. This comprehensive initiative encompasses optimizing the eIVF system, creating and maintaining an inclusive mobile application for both iOS and Android, enhancing two web applications, and establishing a cron server for automated tasks.
  <br /><br />
  I am pivotal in improving the backend of the eIVF system, ensuring efficient handling of sensitive data and implementing stringent security measures. The mobile application development introduces innovative features like real-time access to fertility information, appointment management, and virtual consultations. 
  <br /><br />
  My contributions significantly bolster Inception Fertility LLC's digital offerings, consolidating its position as a frontrunner in delivering cutting-edge, empathetic fertility care solutions in the North Americas.
</p>


        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
            <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> AWS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> VueJS 
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Microsoft Power BI
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ExpressJS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TensorFlow
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default InceptionDevelopment;
