import React, { useEffect, useState } from "react";
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
  const [path, setPath] = useState(
    window.location.pathname.replace(/\/$/, "") || "/",
  );

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname.replace(/\/$/, "") || "/");
    };

    const handleClick = (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      const link = target instanceof Element ? target.closest("a") : null;
      if (!link || link.target === "_blank") return;

      const href = link.getAttribute("href");
      if (!href || (!href.startsWith("/") && !href.startsWith("#"))) return;

      event.preventDefault();
      window.history.pushState({}, "", href);
      setPath(window.location.pathname.replace(/\/$/, "") || "/");

      window.requestAnimationFrame(() => {
        const hash = window.location.hash.slice(1);
        if (hash) {
          document.getElementById(decodeURIComponent(hash))?.scrollIntoView();
        } else {
          window.scrollTo(0, 0);
        }
      });
    };

    window.addEventListener("popstate", handlePopState);
    document.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleClick);
    };
  }, []);

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
