import React from "react";
import { Layout, Banner } from "../shared.jsx";

function Home() {
  const solutions = [
    [
      "/solar-street-light",
      "01 / SOLAR",
      <>
        Solar street
        <br />
        lighting
      </>,
      "/img/15W-3-WINDOW-SOLAR-STREET-LIGHT.png",
    ],
    [
      "/flood-light",
      "02 / LIGHTING",
      <>
        Flood
        <br />
        lights
      </>,
      "/img/flood-light.png",
    ],
    [
      "/home-appliance",
      "03 / HOME",
      <>
        Everyday
        <br />
        appliances
      </>,
      "/img/induction-Stove-qjougp9y7od4igssw2ngndld5vfon42btpgdhd986k.jpg",
    ],
  ];
  return (
    <Layout active="Home">
      <main>
        <section className="hero">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span /> Energy made practical
              </p>
              <h1>
                Light up the <em>life</em> you’re building.
              </h1>
              <p className="hero-lead">
                From streets and businesses to the heart of your home, we bring
                dependable energy solutions that feel simple, efficient and
                built to last.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#solutions">
                  Explore solutions <i className="bi bi-arrow-down-right" />
                </a>
                <a className="text-link" href="/contact#whatsapp-form">
                  Start a conversation <i className="bi bi-arrow-up-right" />
                </a>
              </div>
              <div className="hero-note">
                <span className="avatar-stack">
                  <i className="bi bi-person-fill" />
                  <i className="bi bi-person-fill" />
                  <i className="bi bi-person-fill" />
                </span>
                <span>Trusted by homes, teams and communities</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-wrap">
                <img
                  src="/img/solar-street-light-qjotvolve1lawdbwmhkse6jayp17irmeloai5mf5bg.jpg"
                  alt="Solar street light installed outdoors"
                />
                <div className="image-label">
                  <i className="bi bi-check-circle-fill" />
                  <span>
                    <strong>Built for Nepal</strong>
                    <small>Efficient. Durable. Local.</small>
                  </span>
                </div>
              </div>
              <div className="floating-stat">
                <strong>3+</strong>
                <span>
                  years of
                  <br />
                  smart energy
                </span>
              </div>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>Scroll to discover</span>
            <i className="bi bi-arrow-down" />
            <div className="hero-line" />
            <span>01 — 04</span>
          </div>
        </section>
        <section className="intro section container">
          <div className="section-kicker">Why Sambridha Nepal</div>
          <div className="intro-grid">
            <h2>
              Energy solutions with a more <span>human</span> point of view.
            </h2>
            <div>
              <p>
                We believe better energy should be accessible, understandable
                and useful in everyday life. Our team combines practical
                installation experience with products selected for real-world
                performance.
              </p>
              <a className="text-link dark" href="/about">
                Get to know us <i className="bi bi-arrow-up-right" />
              </a>
            </div>
          </div>
          <div className="metrics">
            <div>
              <strong>01</strong>
              <span>
                Thoughtful
                <br />
                recommendations
              </span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>
                Energy that
                <br />
                keeps going
              </span>
            </div>
            <div>
              <strong>100%</strong>
              <span>
                Care from
                <br />
                start to finish
              </span>
            </div>
          </div>
        </section>
        <section className="solutions section" id="solutions">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="section-kicker">What we do</div>
                <h2>
                  Solutions that move
                  <br />
                  <span>you forward.</span>
                </h2>
              </div>
              <p>
                Explore reliable products and services for brighter streets,
                safer spaces and more comfortable homes.
              </p>
            </div>
            <div className="solution-grid">
              {solutions.map(([href, number, title, image]) => (
                <a className="solution-card" href={href} key={href}>
                  <div className="solution-number">{number}</div>
                  <div className="solution-card-content">
                    <h3>{title}</h3>
                    <span className="round-arrow">
                      <i className="bi bi-arrow-up-right" />
                    </span>
                  </div>
                  <img src={image} alt="" />
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="process section container">
          <div className="section-heading">
            <div>
              <div className="section-kicker">A better way to begin</div>
              <h2>
                Simple steps.
                <br />
                <span>Real results.</span>
              </h2>
            </div>
            <p>
              From the first conversation to the final installation, we keep
              things clear and personal.
            </p>
          </div>
          <div className="process-grid">
            <article>
              <strong>01</strong>
              <h3>Understand</h3>
              <p>We listen to your space, goals and everyday needs.</p>
            </article>
            <article>
              <strong>02</strong>
              <h3>Recommend</h3>
              <p>We select practical products that fit your life and budget.</p>
            </article>
            <article>
              <strong>03</strong>
              <h3>Support</h3>
              <p>We stay close with dependable installation and care.</p>
            </article>
          </div>
        </section>
        <Banner />
      </main>
    </Layout>
  );
}

export { Home };
