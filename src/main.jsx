import React from "react";
import { createRoot } from "react-dom/client";
import "../css/style.css";
import "./react.css";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Team } from "./pages/Team.jsx";
import { Contact } from "./pages/Contact.jsx";
import { SolarPage, FloodLight, Appliances } from "./pages/Products.jsx";
import { NotFound } from "./pages/NotFound.jsx";

function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  if (path === "/about") return <About />;
  if (path === "/team") return <Team />;
  if (path === "/contact") return <Contact />;
  if (path === "/solar-street-light") return <SolarPage />;
  if (path === "/flood-light") return <FloodLight />;
  if (path === "/home-appliance" || path === "/home-applicance")
    return <Appliances />;
  if (path === "/") return <Home />;
  return <NotFound />;
}

createRoot(document.getElementById("root")).render(<App />);
