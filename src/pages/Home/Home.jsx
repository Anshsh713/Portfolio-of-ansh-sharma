import React from "react";
import Introduction from "../Introduction/Introduction";
import About from "../about/About";
import Skill from "../skills/Skill";
import Contacts from "../contacts/Contacts";
import Project from "../projects/Project";
const Home = () => {
  return (
    <div>
    <main>
      <section id="home">
        <Introduction />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="skills">
        <Skill />
      </section>

      <section id="contact">
        <Contacts />
      </section>
    </main>
    </div>
  );
};

export default Home;
