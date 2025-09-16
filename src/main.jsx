import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Componenets/Header/Header";
import Footer from "./Componenets/footer/Footer";
import Home from "./pages/Home/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Home />
    <Footer />
  </StrictMode>
);
