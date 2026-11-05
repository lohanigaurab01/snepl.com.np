import React, { useState } from "react";
import { WA, Layout, Hero } from "../shared.jsx";

function Contact() {
  const [sent, setSent] = useState(false);

  const sendEmail = (event) => {
    event.preventDefault();
    const body = Array.from(new FormData(event.currentTarget).entries())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");
    window.location.href = `mailto:info@snepl.com.np?subject=Website enquiry&body=${encodeURIComponent(body)}`;
  };

  const sendWhatsApp = (event) => {
    event.preventDefault();
    const text = new FormData(event.currentTarget).get("whatsapp-message");
    window.open(
      `${WA}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  };

  return (
    <Layout active="Contact">
      <main>
        <Hero
          eyebrow="Contact us"
          title="Let’s talk about<br /><em>what’s possible.</em>"
          lead="Have a project, a question or just an idea? We would love to hear from you."
          page="Contact"
        />
        <section className="contact-layout section container">
          <div className="contact-form-card">
            <div className="section-kicker">Send a message</div>
            <h2>
              Tell us a little
              <br />
              <span>about your needs.</span>
            </h2>
            <form onSubmit={sendEmail}>
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                required
              />
              <label htmlFor="phone">Phone number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+977 98..."
                required
              />
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
              <label htmlFor="message">How can we help?</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your project..."
                required
              />
              <button className="button button-dark" type="submit">
                Send enquiry <i className="bi bi-arrow-up-right" />
              </button>
            </form>
          </div>

          <aside className="contact-info">
            <div className="section-kicker">Find us here</div>
            <h2>
              Good conversations
              <br />
              <span>start simply.</span>
            </h2>
            <p>
              Our team is ready to help you find a practical solution for your
              space.
            </p>
            <ContactDetail icon="telephone-fill" label="Call us">
              <a href="tel:+9779857070242">+977 9857070242</a>
            </ContactDetail>
            <ContactDetail icon="whatsapp" label="Chat with WhatsApp">
              <a href={WA} target="_blank" rel="noreferrer">
                Message us on WhatsApp
              </a>
            </ContactDetail>
            <ContactDetail icon="envelope-fill" label="Email us">
              <a href="mailto:info@snepl.com.np">info@snepl.com.np</a>
              <a href="mailto:snepl.2015@gmail.com">snepl.2015@gmail.com</a>
            </ContactDetail>
            <ContactDetail icon="clock-fill" label="Working hours">
              <span>Mon – Fri: 10:00 AM – 5:00 PM</span>
            </ContactDetail>
          </aside>
        </section>
      </main>
    </Layout>
  );
}

function ContactDetail({ icon, label, children }) {
  return (
    <div className="contact-detail">
      <i className={`bi bi-${icon}`} />
      <div>
        <small>{label}</small>
        {children}
      </div>
    </div>
  );
}

export { Contact };
