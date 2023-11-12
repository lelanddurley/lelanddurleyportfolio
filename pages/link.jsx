import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { FaInstagram, FaYoutube, FaSteam, FaFacebook } from 'react-icons/fa'; 
import Image from 'next/image';
import Link from 'next/link';

const LinkPage = () => {
  const [backgroundColor, setBackgroundColor] = useState('hsl(0, 100%, 50%)');
  const [positions, setPositions] = useState([]);
  const logoCellWidth = 139.2 / 1.7; 
  const logoCellHeight = 56 / 1.7; 
  const iconSize = 200; //arbitrary, but not arbitrary. It has something to do with the bounding of each of the cells to the edges of the container/viewport so don't ask lol.

  const socialMedia = [
    { icon: <FaInstagram />, link: 'https://www.instagram.com/lelanddurley/', color: 'black' },
    { icon: <FaYoutube />, link: 'https://www.youtube.com/channel/UC1oU-LVG9yo4MvV3Vy3CHxQ', color: 'black' },
    { icon: <FaSteam />, link: 'https://steamcommunity.com/profiles/76561198140066597/', color: 'black' },
    { icon: <FaFacebook />, link: 'https://www.facebook.com/profile.php?id=100010006690560', color: 'black' },
  ];

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    
    const colorInterval = setInterval(updateBackgroundColor, 250 / 60); // 60 FPS

    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(colorInterval);
    };
  }, []);

  const handleResize = () => {
    const initialPositions = [];
    const maxX = window.innerWidth - logoCellWidth;
    const maxY = window.innerHeight - logoCellHeight;
  
    for (let i = 0; i < socialMedia.length; i++) {
      let newPosition;
      do {
        newPosition = {
          x: Math.random() * (maxX - iconSize),
          y: Math.random() * (maxY - iconSize),
        };
      } while (
        initialPositions.some(
          (position) =>
            newPosition.x + logoCellWidth > position.x &&
            newPosition.x < position.x + logoCellWidth &&
            newPosition.y + logoCellHeight > position.y &&
            newPosition.y < position.y + logoCellHeight
        )
      );
      initialPositions.push(newPosition);
    }
    setPositions(initialPositions);
  };
  
  const getRandomPosition = (maxX, maxY) => {
    let newPosition = { x: 0, y: 0 };
  
    do {
      newPosition = {
        x: Math.random() * (maxX - iconSize),
        y: Math.random() * (maxY - iconSize),
      };
    } while (
      positions.some((position) =>
        newPosition.x + logoCellWidth > position.x &&
        newPosition.x < position.x + logoCellWidth &&
        newPosition.y + logoCellHeight > position.y &&
        newPosition.y < position.y + logoCellHeight
      )
    );
  
    return newPosition;
  };
  const updateBackgroundColor = () => {
    
    const hue = (Date.now() / 250) % 360; 

    const newBackgroundColor = `hsl(${hue}, 100%, 50%)`;
    setBackgroundColor(newBackgroundColor);
  };

  return (
    <>
      <Head>
        <title>Social Media Links | Leland Durley</title>
        <meta
          name="description"
          content="Connect with Leland Durley on various social media platforms."
        />
        <link rel="icon" href="/assets/signature3nav.svg" />
        <style>{`
          body, html {
            margin: 0;
            padding: 0;
            overflow: hidden; /* Prevent scrolling */
          }
          #__next {
            height: 100vh; /* Full viewport height */
            max-width: 100vw; /* Full viewport width */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: ${backgroundColor}; /* Dynamic background color */
            transition: background-color 1s; /* Smooth transition for color change */
          }
          /* Style for non-clickable and non-highlightable text */
          .non-clickable {
            pointer-events: none;
            user-select: none;
            padding: 20px; /* Adjust the padding as needed */
          }
          /* Positioning for the logo in the top left corner */
          #logo-container {
            position: absolute;
            top: 20px;
            left: 20px;
          }
        `}</style>
      </Head>

      <div id="logo-container">
        <Link href="/">
          <Image
            src="/assets/signature3nav.svg"n
            alt="Logo"
            width={139.2 / 1.7}
            height={56 / 1.7}
            className="cursor-pointer"
          />
        </Link>
      </div>

      <div id="linkPageContainer" style={{
        maxWidth: '100vw',
        maxHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        <h1 className="non-clickable">Connect with Me</h1>
        <p className="non-clickable">Find me on social media and get in touch!</p>
      </div>

      <div style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {socialMedia.map((media, index) => (
          <a
            key={index}
            href={media.link}
            target="_blank"
            rel="noreferrer"
            aria-label="Social Media Link"
            style={{
              position: 'absolute',
              left: `${positions[index]?.x}px`,
              top: `${positions[index]?.y}px`,
              fontSize: '4rem',
              color: media.color, 
            }}
          >
            {media.icon}
          </a>
        ))}
      </div>
    </>
  );
};

export default LinkPage;
