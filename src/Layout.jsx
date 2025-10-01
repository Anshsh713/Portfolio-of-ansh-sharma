import React from "react";
import Header from "./Componenets/Header/Header.jsx"
import Home from "./pages/Home/Home";
import About from "../about/About";
import Skills from "../skills/Skill";
import Contact from "../contacts/Contacts";
import Projects from "../projects/Project";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Layout;
