import React from "react";
import { Layout, Hero, Banner } from "../shared.jsx";

const solarProducts = [
  [
    "15W 3 Window Solar Street Light",
    "15W-3-WINDOW-SOLAR-STREET-LIGHT.png",
    "01 · Popular choice",
    "SLSOLARINT15R",
    [
      "Solar panel: 5V 9W",
      "Battery: 3.2V 15Ah LiFePO4",
      "LED power: 90W · Efficacy: 120 LM/W",
      "Charging: 7–8 hours · Lighting: >1 night",
      "IP65 · Motion sensor · 3-year warranty",
    ],
  ],
  [
    "25W 6 Window Solar Street Light",
    "Untitled-design-2024-02-12T112622.475.png",
    "02 · Multi-window",
    "PP125W-6WSLIN",
    [
      "Solar panel: 5V 18W",
      "Battery: 3.2V 25Ah LiFePO4",
      "LED power: 180W · 336 LEDs",
      "Charging: 7–8 hours · Lighting: >2 nights",
      "IP65 · 50mm pole · 3-year warranty",
    ],
  ],
  [
    "25W Aero Solar Street Light",
    "Untitled-design-2024-02-12T104542.522.png",
    "03 · Aero series",
    "SL-AERO-INT-25",
    [
      "Solar panel: 5V 18W",
      "Battery: 3.2V 20Ah LiFePO4",
      "LED power: 200W · 480 LEDs",
      "Charging: 7–8 hours · Lighting: >2 nights",
      "IP65 · 45mm pole · 3-year warranty",
    ],
  ],
  [
    "30W Aero Solar Street Light",
    "Untitled-design-2024-02-12T103606.464.png",
    "04 · Aero series",
    "SL-AERO-INT-30",
    [
      "Solar panel: 5V 25W",
      "Battery: 3.2V 25Ah LiFePO4",
      "LED power: 250W · 640 LEDs",
      "Charging: 7–8 hours · Lighting: >2 nights",
      "IP65 · 45mm pole · 3-year warranty",
    ],
  ],
  [
    "35W Aero Solar Street Light",
    "Untitled-design-2024-02-12T103606.464.png",
    "05 · Aero series",
    "PP135W-AEROSLN",
    [
      "Solar panel: 5V 25W",
      "Battery: 3.2V 25Ah LiFePO4",
      "LED efficacy: 120 LM/W · CRI >80",
      "Motion and day/night sensors",
      "IP65 · 3-year warranty",
    ],
  ],
  [
    "15W 3 Window Solar Street Light",
    "Untitled-design-2024-02-12T112024.393.png",
    "06 · Integrated",
    "SLSOLARINT15R",
    [
      "LiFePO4 battery and integrated solar panel",
      "Remote control and motion sensor",
      "Cool white 6000K–6500K",
      "ABS body · IP65 protection",
      "3-year warranty",
    ],
  ],
  [
    "LED 30W Solar Street Light",
    "LED-30w-Solar-Street-Light-Aluminium-80-W.png",
    "07 · Aluminium body",
    "SGE-SSL-30W",
    [
      "Aluminium construction",
      "High-efficiency LED lighting",
      "Automatic day/night operation",
      "Weather-ready outdoor design",
      "Suitable for roads and compounds",
    ],
  ],
  [
    "12W Semi Integrated Solar Street Light",
    "12W-Semi-Integrated-Solar-Street-Light.png",
    "08 · Semi-integrated",
    "ETSSL-INT-12-PRM-A",
    [
      "Semi-integrated solar design",
      "Efficient LED output for pathways",
      "Automatic day/night sensor",
      "Durable outdoor construction",
      "Low-maintenance installation",
    ],
  ],
  [
    "250W Aluminium Solar LED Street Light",
    "250-W-Aluminum-Solar-LED-Street-Light-IP-Rating-65.png",
    "09 · High output",
    "IP Rating: 65",
    [
      "Aluminium body for outdoor durability",
      "High-output LED illumination",
      "IP65 water and dust protection",
      "Automatic solar charging system",
      "Built for demanding outdoor areas",
    ],
  ],
  [
    "60W LED Solar All-in-One Street Light",
    "60-Watt-Led-Solar-All-in-One-Street-Light.png",
    "10 · All-in-one",
    "All-in-one solar street light",
    [
      "Integrated panel, battery and LED body",
      "Efficient 60W LED output",
      "Automatic dusk-to-dawn operation",
      "Simple installation and servicing",
      "Suitable for streets and public spaces",
    ],
  ],
  [
    "250W Aluminium Solar LED Street Light",
    "250-W-Aluminum-Solar-LED-Street-Light-IP-Rating-65.png",
    "11 · Aluminium series",
    "IP Rating: 65",
    [
      "Aluminium outdoor housing",
      "Wide-beam LED street illumination",
      "IP65 water and dust protection",
      "Solar powered, low running cost",
      "Designed for long service life",
    ],
  ],
  [
    "60W LED Solar All-in-One Street Light",
    "60-Watt-Led-Solar-All-in-One-Street-Light.png",
    "12 · All-in-one",
    "All-in-one solar street light",
    [
      "Integrated solar lighting system",
      "60W LED illumination",
      "Automatic day/night control",
      "Compact body and simple mounting",
      "Ideal for pathways and streets",
    ],
  ],
  [
    "250W Solar LED Street Light with PIR",
    "250-W-Aluminum-Solar-LED-Street-Light-IP-Rating-65.png",
    "13 · Smart sensor",
    "Motion-sensing high-efficiency model",
    [
      "Phosphorus battery with PIR motion sensor",
      "12m detection range · 102° horizontal / 92° vertical",
      "2.6A solar charge controller · 2800 lumen output",
      "120° LED dispersion · driver efficiency >90%",
      "Full-night backup with dimming · mounting height 4–5m",
    ],
  ],
];

function ProductCard({ name, image, tag, model, specs, featured }) {
  return (
    <article
      className={`catalogue-card ${featured ? "catalogue-featured" : ""}`}
    >
      <div className="catalogue-image">
        <img src={`/img/${image}`} alt={name} />
      </div>
      <div className="catalogue-copy">
        <span className="product-tag">{tag}</span>
        <h3>{name}</h3>
        <p className="model">
          {model.includes(":") ? model : `Model: ${model}`}
        </p>
        <ul>
          {specs.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        </ul>
        <a className="button button-dark" href="/contact#whatsapp-form">
          Ask about this model <i className="bi bi-arrow-up-right" />
        </a>
      </div>
    </article>
  );
}

function SolarPage() {
  return (
    <Layout>
      <main>
        <Hero
          eyebrow="Solar collection"
          title="Street lights that<br /><em>work after dark.</em>"
          lead="Explore efficient, weather-ready solar lighting for roads, compounds and communities."
          page="Solar street lights"
        />
        <section className="product-intro section container">
          <div className="section-heading">
            <div>
              <div className="section-kicker">Complete product range</div>
              <h2>
                Choose your
                <br />
                <span>right light.</span>
              </h2>
            </div>
            <p>
              Every model from the original catalogue is included below, with
              specifications that help you compare output, battery capacity and
              installation needs.
            </p>
          </div>
          <div className="catalogue-grid">
            {solarProducts.map(([name, image, tag, model, specs], index) => (
              <ProductCard
                key={`${name}-${tag}`}
                name={name}
                image={image}
                tag={tag}
                model={model}
                specs={specs}
                featured={index === 0}
              />
            ))}
          </div>
        </section>
        <Banner />
      </main>
    </Layout>
  );
}

function FloodLight() {
  const specs = [
    ["Output", "200W"],
    ["Protection", "IP66"],
    ["Lifetime", "50,000 hrs"],
    ["Warranty", "3 years"],
  ];
  const details = [
    "90–275V AC input voltage",
    "Natural white LED · 130 lumen per watt",
    "Automatic day/night sensor with surge protection",
    "Pressure die-cast aluminium body",
  ];
  return (
    <Layout>
      <main>
        <Hero
          eyebrow="Professional lighting"
          title="Bring every corner<br /><em>into focus.</em>"
          lead="High-output LED flood lighting built for demanding outdoor and commercial spaces."
          page="Flood lights"
        />
        <section className="product-detail section container">
          <div className="detail-image">
            <img src="/img/flood-light.png" alt="200W LED flood light" />
          </div>
          <div className="detail-copy">
            <div className="section-kicker">Featured product</div>
            <h2>
              200W LED
              <br />
              <span>flood light.</span>
            </h2>
            <p className="detail-lead">
              Powerful, weather-resistant illumination with automatic day/night
              control for roads, yards, buildings and large outdoor areas.
            </p>
            <div className="spec-grid">
              {specs.map(([label, value]) => (
                <div key={label}>
                  <small>{label}</small>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
            <ul className="detail-list">
              {details.map((item) => (
                <li key={item}>
                  <i className="bi bi-check2-circle" /> {item}
                </li>
              ))}
            </ul>
            <a className="button button-dark" href="/contact#whatsapp-form">
              Request a quotation <i className="bi bi-arrow-up-right" />
            </a>
          </div>
        </section>
        <FeatureStrip />
        <Banner />
      </main>
    </Layout>
  );
}

function FeatureStrip() {
  const features = [
    [
      "shield-check",
      "Made to last",
      "Robust materials and IP66 water and dust protection.",
    ],
    [
      "brightness-high",
      "Bright where needed",
      "Efficient output designed for wide outdoor coverage.",
    ],
    [
      "tools",
      "Supported locally",
      "Our team helps with installation and ongoing support.",
    ],
  ];
  return (
    <section className="feature-strip">
      <div className="container feature-strip-grid">
        {features.map(([icon, title, text]) => (
          <div key={title}>
            <i className={`bi bi-${icon}`} />
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Appliances() {
  const products = [
    [
      "Induction stove",
      "induction-Stove-qjougp9y7od4igssw2ngndld5vfon42btpgdhd986k.jpg",
      "Fast, efficient cooking for modern kitchens.",
    ],
    [
      "Water dispenser",
      "Water-Dispenser-scaled-qjoum4sdp7srlcwt6f5v2098q0o145mhwl5dax7c8c.jpg",
      "Reliable hot and cold water whenever you need it.",
    ],
    [
      "Electric kettle",
      "Electric-Kettle-qjourens1r0oql90dp8i1occpuo6b0k9yoxg8tdtbg.png",
      "Simple, quick boiling for everyday routines.",
    ],
  ];
  return (
    <Layout>
      <main>
        <Hero
          eyebrow="Home collection"
          title="Small upgrades.<br /><em>Better everyday.</em>"
          lead="Thoughtful appliances that make daily routines more comfortable and efficient."
          page="Home appliances"
        />
        <section className="appliance-section section container">
          <div className="section-heading">
            <div>
              <div className="section-kicker">The everyday edit</div>
              <h2>
                Useful things
                <br />
                <span>well chosen.</span>
              </h2>
            </div>
            <p>
              Explore practical appliances selected for comfort, convenience and
              dependable everyday use.
            </p>
          </div>
          <div className="appliance-grid">
            {products.map(([name, image, text], index) => (
              <article
                className={`appliance-product ${index === 0 ? "appliance-main" : ""}`}
                key={name}
              >
                <img src={`/img/${image}`} alt={name} />
                <div>
                  <span>Home essential</span>
                  <h3>{name}</h3>
                  <p>{text}</p>
                  <a href="/contact#whatsapp-form">
                    Enquire <i className="bi bi-arrow-up-right" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
        <Banner />
      </main>
    </Layout>
  );
}

export { SolarPage, FloodLight, Appliances };
