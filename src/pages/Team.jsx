import React from "react";
import { Layout, Hero, Banner } from "../shared.jsx";

function Team() {
  return (
    <Layout active="Our team">
      <main>
        <Hero
          eyebrow="The people behind the work"
          title="A small team with<br /><em>big care.</em>"
          lead="People who listen, solve problems and take pride in getting the details right."
          page="Our team"
        />
        <section className="team-section section container">
          <div className="section-heading">
            <div>
              <div className="section-kicker">Meet the team</div>
              <h2>
                Good work is
                <br />
                <span>a team sport.</span>
              </h2>
            </div>
            <p>
              Our people bring practical knowledge, curiosity and a shared
              commitment to making energy work better for our customers.
            </p>
          </div>
          <div className="team-grid">
            <TeamCard
              image="/img/binod.jpeg"
              role="Founder & lead"
              name="Binod Tiwari"
            />
            <TeamCard role="Operations" name="Pabitra Panta" sun />
            <TeamCard role="Our approach" name="People first" green />
          </div>
        </section>
        <Banner />
      </main>
    </Layout>
  );
}

function TeamCard({ image, role, name, sun, green }) {
  return (
    <article
      className={`team-card ${sun ? "team-card-sun" : ""} ${green ? "team-card-green" : ""}`}
    >
      <div className="team-card-media">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <div className="team-placeholder">
            <i
              className={`bi bi-${green ? "people-fill" : "lightbulb-fill"}`}
            />
          </div>
        )}
      </div>
      <div className="team-card-content">
        <span>{role}</span>
        <h3>{name}</h3>
      </div>
    </article>
  );
}

export { Team };
