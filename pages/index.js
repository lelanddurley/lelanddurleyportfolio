import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Leland | Full Stack Developer</title>
        <meta
          name="description"
          content="I’m a Fullstack Developer specializing in building (and designing) cutting-edge applications for customers, enterprises, and friends."
        />
        <link rel="icon" href="/signature3.svg" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
