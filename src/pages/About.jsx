import React, { useState } from "react";
import { WA, Layout, Hero, Banner } from "../shared.jsx";

function About() {
  const values = [
    [
      "bullseye",
      "Our mission",
      "To provide exceptional installations and reliable products that improve comfort, functionality and energy efficiency.",
    ],
    [
      "eye",
      "Our vision",
      "To lead the way in practical, accessible energy solutions that help communities and businesses thrive.",
    ],
    [
      "heart",
      "Our promise",
      "To show up with clarity, quality and genuine care at every step of the customer journey.",
    ],
  ];
  return (
    <Layout active="About us">
      <main>
        <Hero
          eyebrow="Our story"
          title="Energy that starts with <em>care.</em>"
          lead="We help people and businesses make better choices for brighter, more comfortable spaces."
          page="About us"
        />
        <section className="about-story section container">
          <div className="about-image">
            <img
              className="about-background-image"
              src="/img/close-view-solar-panel-scaled-qj7axtyik7q6rsnu5sdyl0j2qzozvj47xf340htirs.jpg"
              alt="Solar panels in bright sunlight"
            />
          </div>
          <div className="about-copy">
            <div className="section-kicker">Who we are</div>
            <h2>
              Practical expertise.
              <br />
              <span>Meaningful impact.</span>
            </h2>
            <p>
              At Sambridha Nepal Energy PVT Ltd, we deliver dependable lighting,
              heating, ventilation and energy solutions for everyday spaces. We
              combine quality products with thoughtful installation so the
              result works beautifully long after the first switch-on.
            </p>
            <p>
              Our approach is simple: understand the need, recommend honestly
              and take care of the details. Every project is an opportunity to
              make a space safer, more comfortable and more efficient.
            </p>
            <a className="button button-dark" href="/contact#whatsapp-form">
              Work with us <i className="bi bi-arrow-up-right" />
            </a>
          </div>
        </section>
        <section className="values section">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="section-kicker">What guides us</div>
                <h2>
                  Good energy is
                  <br />
                  <span>thoughtful energy.</span>
                </h2>
              </div>
              <p>
                We are here to make the transition to better energy feel clear,
                useful and personal.
              </p>
            </div>
            <div className="value-grid">
              {values.map(([icon, title, text]) => (
                <article key={title}>
                  <i className={`bi bi-${icon}`} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Banner />
      </main>
    </Layout>
  );
}

export { About };
