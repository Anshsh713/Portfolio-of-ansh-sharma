import React from "react";
import "./About.css";
import me from "../../againme.png";
const About = () => {
  return (
    <div className="about">
      <div className="about-image">
        <img src={me} alt="Ansh Sharma" />
      </div>
      <div className="about-text">
        <h1>I love Doing Different Things</h1>
 As an Electrical Engineering student at SMVDU,<br /> I'm also
  A Front-End Web Developer, and a C++ Programmer who enjoys blending logic with creativity.<br />

I work with C++, Data Structures & Algorithms, and Web Development (HTML, CSS, JavaScript, React), and <br /> I love turning simple ideas into challenging, innovative projects.<br /> My curiosity pushes me to explore both engineering and coding,<br />

Outside the tech world, I’m a Gamer, YouTuber, and Artist.<br /> Gaming sharpens my strategy, YouTubing improves my storytelling,<br /> and art fuels my creativity — all of which add a unique edge to my problem-solving approach.
      </div>
    </div>
  );
};

export default About;
