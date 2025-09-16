import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dark_light, setDarkLight] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const darkmode = () => {
    setDarkLight(!dark_light);
    document.body.classList.toggle("dark-mode");
    const darkIcon = document.getElementById("dark");
    if (darkIcon) {
      darkIcon.innerHTML = dark_light
        ? '<i class="fa-solid fa-moon"></i>'
        : '<i class="fa-solid fa-sun"></i>';
    }
  };

  // Scroll listener for active section and header style
  useEffect(() => {
    const sections = ["home", "about", "projects", "skills", "contact"];

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      let current = "home";
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100; // adjust offset
          if (window.scrollY >= top) current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="menu-toggle" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>

      <header
        className={`header ${
          scrolled ? (dark_light ? "scrolled-dark" : "scrolled-light") : ""
        }`}
      >
        <div className="Name">
          <h1>AnshS</h1>
        </div>

        <div className={`content ${isMenuOpen ? "active" : ""}`}>
          <ul>
            {["home", "about", "projects", "skills", "contact"].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={activeSection === section ? "active-link" : ""}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section === "home"
                    ? "Home"
                    : section === "about"
                    ? "About Me"
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <a onClick={darkmode}>
                <div id="dark">
                  <i className="fa-solid fa-moon"></i>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
