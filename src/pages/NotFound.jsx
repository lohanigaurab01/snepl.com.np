import React from "react";
import { Layout, Hero } from "../shared.jsx";

function NotFound() {
  return (
    <Layout>
      <main>
        <Hero
          eyebrow="Page not found"
          title="That page<br /><em>doesn’t exist.</em>"
          lead="The page you are looking for may have moved or is no longer available."
          page="404"
        />
        <section className="not-found section container">
          <div className="not-found-card">
            <span className="not-found-number">404</span>
            <h2>
              Let’s get you
              <br />
              <span>back on track.</span>
            </h2>
            <p>
              Explore our energy solutions or return to the Sambridha Nepal
              homepage.
            </p>
            <a className="button button-dark" href="/">
              Back to home <i className="bi bi-arrow-up-right" />
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export { NotFound };
