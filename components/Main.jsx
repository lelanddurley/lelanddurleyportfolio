import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  const [showLinkButton, setShowLinkButton] = useState(false);
  const [isMouseOnButton, setIsMouseOnButton] = useState(false);
  const [isNameActivated, setIsNameActivated] = useState(false);

  const showLinkButtonAfterDelay = () => {
    setTimeout(() => {
      setShowLinkButton(true);
    }, 5000); // 5 seconds delay
  };

  const hideLinkButton = () => {
    setShowLinkButton(false);
  };

  const handleMouseEnterButton = () => {
    setIsMouseOnButton(true);
  };

  const handleMouseLeaveButton = () => {
    setIsMouseOnButton(false);
  };

  const activateName = () => {
    setIsNameActivated(true);
  };

  const deactivateName = () => {
    setIsNameActivated(false);
  };

  // Function to hide the link button when the "Escape" key is pressed
  const handleEscapeKey = (event) => {
    if (event.keyCode === 27) {
      setShowLinkButton(false);
    }
  };

  useEffect(() => {
    // Add event listener for the "Escape" key press
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      // Remove event listener when component unmounts
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div onMouseEnter={showLinkButtonAfterDelay} onMouseLeave={hideLinkButton}>
          <h1 className={`py-4 text-gray-700 ${isNameActivated || isMouseOnButton ? "rainbow-text" : ""}`}>
            Hi, I'm <span className="rainbow-name" onMouseEnter={activateName} onMouseLeave={deactivateName}>
              Leland
            </span>
          </h1>
          {showLinkButton && (
            <Link href="/link">
              <div className="link-button">
                <button
                  className="square-button"
                  onClick={() => setShowLinkButton(false)}
                  onMouseEnter={handleMouseEnterButton}
                  onMouseLeave={handleMouseLeaveButton}
                >
                  Click Me
                </button>
              </div>
            </Link>
          )}
          <h1 className="py-2 text-gray-700">A Full-Stack Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I’m focused on establishing responsive mobile & web applications for customers, enterprises, and friends.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="https://www.linkedin.com/in/leland-durley-539109215/" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/lelanddurley/" target="_blank" rel="noreferrer">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
