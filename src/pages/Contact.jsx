import React, { useState } from "react";
import { WA, Layout, Hero } from "../shared.jsx";



function Contact() {
  const [sent, setSent] = useState(false);
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneInput = (event) => {
    const input = event.currentTarget;
    input.value = input.value
      .replace(/[^\d+\s-]/g, "")
      .replace(/(?!^)\+/g, "");
  };

  const sendEmail = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "95814b00-9b86-409d-a868-a9f531314f73");
    formData.append("subject", "New website enquiry");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error("Unable to send enquiry");
      }

      setResult("Thanks, your message has been sent.");
      form.reset();
    } catch {
      setResult("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
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
                inputMode="tel"
                autoComplete="tel"
                pattern="(?:\+977[-\s]?)?9[678]\d{8}"
                title="Enter a valid Nepali mobile number, for example +977 9857070242"
                onInput={handlePhoneInput}
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
              <button
                className="button button-dark"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send enquiry"} 
                {!isSubmitting && <i className="bi bi-arrow-up-right" />}
              </button>
              <p role="status" aria-live="polite">
                {result}
              </p>
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
            <ContactDetail icon="geo-alt-fill" label="Location">
              <span>Bharatpur, Nepal</span>
    
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
