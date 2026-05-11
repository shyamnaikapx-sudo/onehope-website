function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: 0 }}>

      {/* Navbar */}
      <nav
        style={{
          background: "#0f172a",
          color: "white",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>One Hope Solution</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#home" style={{ color: "white", textDecoration: "none" }}>Home</a>
          <a href="#about" style={{ color: "white", textDecoration: "none" }}>About</a>
          <a href="#services" style={{ color: "white", textDecoration: "none" }}>Services</a>
          <a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        style={{
          background: "linear-gradient(to right, #0f172a, #2563eb)",
          color: "white",
          padding: "100px 40px",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "48px" }}>
          GMP & Regulatory Consulting
        </h1>

        <p style={{ fontSize: "20px", marginTop: "20px" }}>
          Your trusted partner for Pharma, Nutraceutical,
          Food & Cosmetic compliance solutions.
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "14px 30px",
            border: "none",
            background: "#22c55e",
            color: "white",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Get Consultation
        </button>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "80px 40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          About Us
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "auto",
            textAlign: "center",
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          One Hope Solution provides expert consultancy in GMP compliance,
          documentation support, regulatory affairs, product development,
          quality systems, and nutraceutical formulation services.
        </p>
      </section>

      {/* Services */}
      <section
        id="services"
        style={{
          background: "#f1f5f9",
          padding: "80px 40px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >

          {[
            "GMP Documentation",
            "Regulatory Consulting",
            "Product Development",
            "Label & Claims Review",
            "Third Party Manufacturing",
            "Stability Study Support",
          ].map((service, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <h3>{service}</h3>

              <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
                Professional consulting and complete technical support
                tailored for your business needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "80px 40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Contact Us
        </h2>

        <div
          style={{
            maxWidth: "600px",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: "14px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="email"
            placeholder="Email Address"
            style={{
              padding: "14px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            style={{
              padding: "14px",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />

          <button
            style={{
              padding: "14px",
              border: "none",
              background: "#2563eb",
              color: "white",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#0f172a",
          color: "white",
          textAlign: "center",
          padding: "20px",
        }}
      >
        © 2026 One Hope Solution. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;