import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToSection = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Remove the "/" and get section name
    const sectionId = location.pathname.replace("/", "");
    if (sectionId) {
      const section = document.getElementById(sectionId.toLowerCase());
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If just "/", scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return children;
};

export default ScrollToSection;
