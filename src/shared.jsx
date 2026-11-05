import React, { useEffect, useState } from "react";
const WA = "https://wa.me/9779857070242";
const productLinks = [
  ["/solar-street-light", "Solar street lights"],
  ["/flood-light", "Flood lights"],
  ["/home-appliance", "Home appliances"],
];

const pageSeo = {
  "/": {
    title: "Sambridha Nepal Energy | Solar lighting and energy solutions",
    description:
      "Sambridha Nepal Energy provides solar street lights, LED flood lights, home appliances and practical energy solutions across Nepal.",
  },
  "/about": {
    title: "About Sambridha Nepal Energy | Practical energy solutions",
    description:
      "Learn how Sambridha Nepal Energy delivers dependable lighting, appliance and energy solutions with thoughtful local support.",
  },
  "/contact": {
    title: "Contact Sambridha Nepal Energy | Talk to our team",
    description:
      "Contact Sambridha Nepal Energy for solar street lights, LED flood lights, home appliances and energy solutions in Nepal.",
  },
  "/team": {
    title: "Our Team | Sambridha Nepal Energy",
    description:
      "Meet the Sambridha Nepal Energy team providing practical energy products, installation and customer support.",
  },
  "/solar-street-light": {
    title: "Solar Street Lights in Nepal | Sambridha Nepal Energy",
    description:
      "Explore efficient, weather-ready solar street lights for roads, compounds and communities across Nepal.",
  },
  "/flood-light": {
    title: "LED Flood Lights in Nepal | Sambridha Nepal Energy",
    description:
      "Discover high-output, weather-resistant LED flood lights for outdoor, commercial and public spaces in Nepal.",
  },
  "/home-appliance": {
    title: "Home Appliances in Nepal | Sambridha Nepal Energy",
    description:
      "Explore practical induction stoves, water dispensers and electric kettles from Sambridha Nepal Energy.",
  },
};
const notFoundSeo = {
  title: "Page not found | Sambridha Nepal Energy",
  description: "The requested Sambridha Nepal Energy page could not be found.",
};

function PageSeo() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const seo = pageSeo[path] || notFoundSeo;

  useEffect(() => {
    const url = `https://snepl.com.np${path === "/" ? "/" : path}`;
    document.title = seo.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", seo.description);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", seo.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", seo.description);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", url);
    document
      .querySelector('meta[name="twitter:title"]')
      ?.setAttribute("content", seo.title);
    document
      .querySelector('meta[name="twitter:description"]')
      ?.setAttribute("content", seo.description);
  }, [path, seo]);

  return null;
}

function Header({ active = "" }) {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const nav = [
    ["/", "Home"],
    ["/about", "About us"],
    ["/team", "Our team"],
    ["/contact", "Contact"],
  ];
  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>
            <i className="bi bi-lightning-charge-fill" /> Powering better spaces
            across Nepal
          </span>
          <div className="utility-links">
            <a href="tel:+9779857070242">
              <i className="bi bi-telephone-fill" /> +977 9857070242
            </a>
            <a href="mailto:snepl.2015@gmail.com">
              <i className="bi bi-envelope-fill" /> snepl.2015@gmail.com
            </a>
            <a href="mailto:info@snepl.com.np">
              <i className="bi bi-envelope-fill" /> info@snepl.com.np
            </a>
          </div>
        </div>
      </div>
      <nav className="container main-nav" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Sambridha Nepal home">
          <span className="brand-mark">
            <img src="/favicon.jpg" alt="Sambridha Nepal logo" />
          </span>
          <span>
            <strong>Sambridha</strong>
            <small>NEPAL ENERGY</small>
          </span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(!open)}
        >
          <i className="bi bi-list" />
          <span className="sr-only">Open navigation</span>
        </button>
        <div className={`nav-menu ${open ? "is-open" : ""}`} id="site-menu">
          {nav.slice(0, 2).map(([href, label]) => (
            <a
              className={active === label ? "active" : ""}
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
          <div className={`nav-products ${productsOpen ? "is-open" : ""}`}>
            <button
              type="button"
              aria-expanded={productsOpen}
              aria-controls="products-dropdown"
              onClick={() => setProductsOpen(!productsOpen)}
            >
              Products <i className="bi bi-chevron-down" />
            </button>
            <div className="products-dropdown" id="products-dropdown">
              {productLinks.map(([href, label]) => (
                <a href={href} key={href}>
                  {label}
                </a>
              ))}
            </div>
          </div>
          {nav.slice(2).map(([href, label]) => (
            <a
              className={active === label ? "active" : ""}
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
          <a className="nav-cta" href="https://wa.me/9779857070242">
            Talk to us <i className="bi bi-arrow-up-right" />
          </a>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <a className="brand footer-brand" href="/">
          <span className="brand-mark">
            <img src="/favicon.jpg" alt="Sambridha Nepal logo" />
          </span>
          <span>
            <strong>Sambridha</strong>
            <small>NEPAL ENERGY</small>
          </span>
        </a>
        <p>
          Practical energy solutions
          <br />
          for a brighter Nepal.
        </p>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a
            href="https://www.facebook.com/sambridha.nepal.56"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Sambridha Nepal Energy PVT Ltd. All Rights Reserved.</span>
        <span>
          Developed by{" "}
          <a
            href="https://lohanigaurab.com.np"
            target="_blank"
            rel="noreferrer"
          >
            Gaurab Lohani
          </a>
        </span>
      </div>
    </footer>
  );
}

function Layout({ active, children }) {
  return (
    <>
      <PageSeo />
      <Header active={active} />
      {children}
      <Footer />
    </>
  );
}

function Hero({ eyebrow, title, lead, page }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <p className="eyebrow">
          <span /> {eyebrow}
        </p>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
        <p>{lead}</p>
        <div className="breadcrumb">
          <a href="/">Home</a>
          <i className="bi bi-arrow-right" /> {page}
        </div>
      </div>
    </section>
  );
}

function Banner() {
  return (
    <section className="contact-banner">
      <div className="container contact-banner-inner">
        <div>
          <p className="section-kicker">Have a project in mind?</p>
          <h2>
            Let’s make your
            <br />
            <em>next step brighter.</em>
          </h2>
        </div>
        <a className="button button-primary" href="https://wa.me/9779857070242">
          Talk to us <i className="bi bi-arrow-up-right" />
        </a>
      </div>
    </section>
  );
}

export { WA, Header, Footer, Layout, Hero, Banner };
