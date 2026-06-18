import logo from "../assets/logo.png";
import heroImage from "../assets/hero-pharma.jpg";
import { motion } from "framer-motion";
import { useState } from "react";

function HomePage() {

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [showVideo, setShowVideo] = useState(false);
const askAI = async () => {

    setLoading(true);

    try {

      const response = await fetch(
        "https://onehope-website.onrender.com/api/ask-ai",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            question,
            name,
            company,
            email,
          }),
        }
      );

      const data = await response.json();

      setAnswer(data.answer);

    } catch (error) {

      setAnswer("AI service temporarily unavailable.");

    }

    setLoading(false);
  };

  return (

    <div className="bg-[#f4f7fb] overflow-hidden">

      {/* HEADER */}

      <header className="bg-white shadow-md sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-4">


            <div className="flex items-center gap-3">
  <img
    src={logo}
    alt="One Hope Solution"
    className="w-14 md:w-20"
  />

  <div className="flex flex-col">
    <h1 className="text-2xl md:text-4xl font-extrabold text-blue-950 leading-none">
  ONE HOPE
</h1>

<h2 className="text-xs md:text-sm font-semibold tracking-[0.15em] text-blue-950 uppercase">
  SOLUTION
</h2>

<p className="text-[10px] md:text-xs text-gray-500 leading-tight mt-1">
  Integrated Pharma & Regulatory Solutions
</p>
  </div>
</div>

          </div>
 {/* Desktop Menu */}

<div className="hidden xl:flex gap-6 font-semibold text-blue-950 text-sm xl:text-base items-center">

  <a href="/">HOME</a>

  <div className="relative group">

  <a
    href="#"
    className="whitespace-nowrap"
  >
    GAP ASSESSMENT
  </a>

  <div
    className="
      absolute
      hidden
      group-hover:block
      bg-white
      border
      shadow-xl
      rounded-lg
      p-5
      w-80
      top-full
      mt-2
      left-0
      z-50
    "
  >

    <h3 className="font-bold text-blue-950 mb-3">
      Audit & Compliance Tools
    </h3>

    <ul className="text-sm space-y-2 text-gray-700">

      <li>
        <a href="/interactive-ai-audit">
          ✓ Interactive AI Audit
        </a>
      </li>

      <li>
        <a href="/ai-audit-simulator">
          ✓ Audit Readiness Simulator
        </a>
      </li>

      <li>
        ✓ GMP Gap Assessment
      </li>

      <li>
        ✓ Regulatory Gap Assessment
      </li>

      <li>
        ✓ Inspection Readiness Check
      </li>

    </ul>

  </div>

</div>
<div className="relative group">
  <a
    href="/clinical-protocol-ai"
    className="whitespace-nowrap"
  >
    CLINICAL AI
  </a>

  <div
    className="
      absolute
      hidden
      group-hover:block
      bg-white
      border
      shadow-xl
      rounded-lg
      p-5
      w-80
      top-8
      left-0
      z-50
    "
  >

    <h3 className="font-bold text-blue-950 mb-3">
      Clinical Trial Protocol Intelligence AI
    </h3>

    <ul className="text-sm space-y-2 text-gray-700">

      <li>✓ Protocol Review</li>
      <li>✓ ICH-GCP Compliance</li>
      <li>✓ Regulatory Risk Assessment</li>
      <li>✓ Recruitment Feasibility</li>
      <li>✓ Sample Size Review</li>
      <li>✓ Safety Monitoring Review</li>
      <li>✓ Amendment Impact Assessment</li>

    </ul>

    <a
      href="/clinical-protocol-ai"
      className="block mt-4 font-bold text-blue-900"
    >
      Try Free →
    </a>

  </div>

</div>
  
<div className="relative group">

  <a
    href="/ai-interview-simulator"
    className="whitespace-nowrap"
  >
    INTERVIEW AI
  </a>

  <div
    className="
      absolute
      hidden
      group-hover:block
      bg-white
      border
      shadow-xl
      rounded-lg
      p-5
      w-72
      top-full
      mt-2
      left-0
      z-50
    "
  >

    <h3 className="font-bold text-blue-950 mb-3">
      Interview Training
    </h3>

    <ul className="text-sm space-y-2 text-gray-700">

      <li>✓ Pharma Interview Simulator</li>
      <li>✓ HR Interview Simulator</li>
      <li>✓ QA/QC Interview Practice</li>
      <li>✓ GMP Training Support</li>

    </ul>

    <a
      href="/ai-interview-simulator"
      className="block mt-4 font-bold text-blue-900"
    >
      Launch →
    </a>

  </div>

</div>
  <div className="relative group">

  <a
    href="#services"
    className="whitespace-nowrap"
  >
    SERVICES
  </a>

  <div
    className="
      absolute
      hidden
      group-hover:block
      bg-white
      border
      shadow-xl
      rounded-lg
      p-5
      w-80
      top-8
      left-0
      z-50
    "
  >

    <h3 className="font-bold text-blue-950 mb-3">
      One Hope Solution Services
    </h3>

    <ul className="text-sm space-y-2 text-gray-700">

      <li>✓ GMP Consultancy</li>
      <li>✓ Regulatory Affairs</li>
      <li>✓ FSSAI Support</li>
      <li>✓ Pharmaceutical dossier</li>
      <li>✓ Plant Design & Setup</li>
      <li>✓ Quality Management Systems</li>
      <li>✓ Validation Services</li>
      <li>✓ Audit Readiness Support</li>
      <li>✓ Training & Workshops</li>
      <li>✓ Product Development Support</li>

    </ul>

    <a
      href="#services"
      className="block mt-4 font-bold text-blue-900"
    >
      Explore Services →
    </a>

  </div>

</div>

  <a href="#contact">
    CONTACT
  </a>


</div>

{/* Mobile Hamburger */}

<button
  className="lg:hidden text-blue-950 text-3xl"
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
>
  ☰
</button>
    </div>

      </header>
      {mobileMenuOpen && (

  <div className="lg:hidden bg-white border-t shadow-md">

    <div className="flex flex-col p-4 space-y-4 font-semibold text-blue-950">

      <a href="/">HOME</a>

      <a href="/ai-interview-simulator">
        AI INTERVIEW
      </a>

      <a href="/interactive-ai-audit">
        INTERACTIVE AI AUDIT
      </a>

      <a href="/ai-audit-simulator">
        AUDIT SIMULATOR
      </a>
      <a href="/clinical-protocol-ai">
  CLINICAL AI
</a>

      <a href="#services">
        SERVICES
      </a>

      <a href="#ai">
        AI ASSISTANT
      </a>

      <a href="#contact">
        CONTACT
      </a>

    </div>

  </div>

)}

{/* HERO */}

<section
  className="relative text-white min-h-screen flex items-center"
  style={{
    backgroundImage: `linear-gradient(rgba(2,16,63,0.94), rgba(2,16,63,0.95)), url(${heroImage})`,

    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  
>

  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-4 md:px-6 py-10 md:py-16 items-center">

    {/* LEFT */}

    <motion.div>

      <div className="inline-block bg-green-500/20 text-green-300 px-5 py-2 rounded-full text-sm font-semibold">

        AI-Powered Compliance Platform

      </div>

      <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">

  AI-Powered Pharma
<br />
Compliance & Regulatory Solutions,
<br />
Audit Readiness & Clinical Protocol Review

</h1>

      <p className="mt-8 text-base md:text-lg text-gray-200 leading-8 max-w-2xl">

        AI-powered GMP audits, clinical protocol review, regulatory intelligence, validation support and compliance solutions for Pharma, Nutraceutical, API and Healthcare organizations.

      </p>

      <div className="mt-8 space-y-3 text-lg text-gray-200">

        <p>
          ✅ Supporting Pharma, API, Nutraceutical & Healthcare industries
        </p>

        <p>
          👨‍🔬 Team having more than 18 years of experience in Pharma & Food industries
        </p>

      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4">

  <a href="/ai-interview-simulator">

    <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 px-5 py-3 rounded-2xl font-bold text-lg">

      🚀 Start AI Interview

    </button>

  </a>

  <a href="/interactive-ai-audit">

    <button className="bg-blue-700 hover:bg-blue-800 px-5 py-3 rounded-2xl font-bold text-lg">

      🧪 Start AI Audit

    </button>

  </a>

  <a href="#ai">

    <button className="bg-white/10 border border-white/20 px-5 py-3 rounded-2xl font-bold text-lg">

      Ask AI Expert

    </button>

  </a>

  <a href="#contact">

    <button className="bg-white/10 border border-white/20 px-5 py-3 rounded-2xl font-bold text-lg">

      Contact Us

    </button>

  </a>

</div>

    </motion.div>

    {/* RIGHT */}

    <motion.div
      id="ai"
      className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[35px] p-8 shadow-2xl"
    >

      <h2 className="text-3xl font-extrabold text-white">

        AI ASSISTANT

      </h2>

      <p className="mt-4 text-gray-200 leading-8">

        Ask GMP, QA/QC, Regulatory, Validation and Interview questions instantly.

      </p>


      <select
        className="w-full mt-4 rounded-2xl bg-white/20 border border-white/20 p-4 text-white"
      >

        <option className="text-black">
          GMP Guidance
        </option>

        <option className="text-black">
          GMP Interview Questions
        </option>

        <option className="text-black">
          GMP Training
        </option>

        <option className="text-black">
          QA/QC Training
        </option>

        <option className="text-black">
          Regulatory Affairs
        </option>

        <option className="text-black">
          Audit Preparation
        </option>

      </select>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask GMP, QA/QC, Validation, Regulatory or Interview Questions..."
        className="w-full h-32 mt-4 rounded-2xl bg-white/20 border border-white/20 p-5 text-white"
      />

      <button
        onClick={askAI}
        className="bg-green-600 hover:bg-green-700 w-full py-4 rounded-2xl text-lg font-bold mt-6 text-white"
      >

        {loading
          ? "Thinking..."
          : "ASK AI CONSULTANT"}

      </button>

      {answer && (

        <div className="bg-white/10 rounded-2xl p-7 mt-6 text-gray-100 leading-8 whitespace-pre-line">

          {answer}

        </div>

      )}

    </motion.div>

  </div>

</section>
 <section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-extrabold text-blue-950">
      Introducing One Hope Solution
    </h2>

    <p className="mt-4 text-gray-600">
      Learn how One Hope Solution combines compliance expertise,
      audit readiness and AI-powered solutions.
    </p>
<div className="mt-8">
  <img
    src="/corporate-video-thumb.png"
    alt="Corporate Video"
    className="w-full rounded-2xl shadow-xl cursor-pointer"
    onClick={() => {
      setVideoUrl("https://www.youtube.com/embed/Arveb0iF02U");
      setShowVideo(true);
    }}
  />
</div>

  </div>
</section>

  <section className="max-w-7xl mx-auto px-6 py-20">
<div className="bg-white rounded-[35px] shadow-xl p-12">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      <div>

        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 leading-tight">

          We Are Not Just Consultants.
          <br />
          We Are Compliance Solution Providers.

        </h2>

        <p className="mt-8 text-base leading-8 text-gray-700">

          One Hope Solution delivers AI-powered GMP,
          regulatory and compliance solutions for
          Pharma, API, Nutraceutical, Food and
          Healthcare industries.

        </p>

        <p className="mt-6 text-base leading-8 text-gray-700">

          We combine industry expertise with
          intelligent AI-driven systems to improve
          audit readiness, compliance management,
          training and operational excellence.

        </p>

      </div>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-blue-50 rounded-3xl p-8 text-center">

          <h3 className="text-3xl font-extrabold text-blue-950">

            18+

          </h3>

          <p className="mt-4 text-gray-700 font-semibold">

            Years Industry Experience

          </p>

        </div>

        <div className="bg-green-50 rounded-3xl p-8 text-center">

          <h3 className="text-5xl font-extrabold text-green-700">

            AI

          </h3>

          <p className="mt-4 text-gray-700 font-semibold">

            Compliance Solutions

          </p>

        </div>

        <div className="bg-gray-100 rounded-3xl p-8 text-center">

          <h3 className="text-5xl font-extrabold text-blue-950">

            GMP

          </h3>

          <p className="mt-4 text-gray-700 font-semibold">

            Audit Readiness

          </p>

        </div>

        <div className="bg-blue-100 rounded-3xl p-8 text-center">

          <h3 className="text-5xl font-extrabold text-blue-950">

            Global

          </h3>

          <p className="mt-4 text-gray-700 font-semibold">

            Compliance Support

          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* CORE FEATURES */}

<section className="py-20 bg-[#f8fafc]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <h1 className="text-4xl font-extrabold text-blue-950">
        AI-Powered Compliance Tools
      </h1>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">

      {[
        {
          title: "Clinical Trial Protocol Intelligence AI",
          desc:
            "Protocol review, ICH-GCP compliance, endpoint assessment and regulatory risk analysis.",
        },

        {
          title: "AI Audit & Gap Assessment",
          desc:
            "Interactive AI audits, audit readiness simulation and GMP compliance gap identification.",
        },

        {
          title: "AI Interview Simulator",
          desc:
            "Pharma, QA, QC, GMP and HR interview preparation with AI-powered feedback.",
        },

      ].map((item, index) => (

        <div
          key={index}
          className="bg-white rounded-2xl p-5 shadow-md min-h-[190px]"
        >

          <h2 className="text-lg font-bold text-blue-950">
            {item.title}
          </h2>
<a
  href={
    item.title.includes("Clinical")
      ? "/clinical-protocol-ai"
      : item.title.includes("Interview")
      ? "/ai-interview-simulator"
      : "/interactive-ai-audit"
  }
  className="inline-block mt-4 text-blue-900 font-bold"
>
  Launch →
</a>
          <p className="mt-3 text-sm text-gray-600 leading-6">
            {item.desc}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>
{/* AI Interview Demo Video */}
<section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-extrabold text-blue-950">
      Watch AI Interview Simulator Demo
    </h2>

    <p className="mt-4 text-gray-600">
      Experience how candidates prepare for QA, QC, GMP and Regulatory Affairs interviews using AI.
    </p>
    <div className="mt-8">
  <img
    src="/interview-video-thumb.png"
    alt="AI Interview Demo"
    className="w-full rounded-2xl shadow-xl cursor-pointer"
    onClick={() => {
      setVideoUrl("https://www.youtube.com/embed/Ku-OeaR6YTU");
      setShowVideo(true);
    }}
  />
</div>

  </div>
</section>


      {/* SERVICES */}

      <section
        id="services"
        className="py-20 bg-[#f8fafc]"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h1 className="text-xl md:text-3xl font-extrabold text-blue-950">

              Integrated Compliance & Regulatory Services

            </h1>

            <p className="mt-4 text-lg text-gray-600">

              End-to-end Pharma, GMP & Regulatory compliance solutions.

            </p>

          </div>

          <div className="space-y-6 mt-16">

            {[
              {
                no: "01",
                title: "NEW FACILITY PROJECTS",
                services: [
                  "Cleanroom Design",
                  "Factory Setup",
                  "HVAC & Validation",
                ],
                promise:
                  "Complete GMP-compliant facility setup and execution.",
              },

              {
                no: "02",
                title: "AUDIT & COMPLIANCE",
                services: [
                  "GMP Audits",
                  "Gap Analysis",
                  "Third-Party Audits",
                ],
                promise:
                  "Inspection readiness and compliance support.",
              },

              {
                no: "03",
                title: "QMS & ISO CERTIFICATION",
                services: [
                  "QMS Setup",
                  "ISO Documentation",
                  "Certification Support",
                ],
                promise:
                  "End-to-end quality system implementation.",
              },

              {
                no: "04",
                title: "REGULATORY & DOSSIER",
                services: [
                  "CTD/eCTD",
                  "Documentation",
                  "Global Submissions",
                ],
                promise:
                  "Regulatory support for approvals and exports.",
              },

            ].map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-[30px] p-8 shadow-md border border-gray-100 grid lg:grid-cols-3 gap-8 items-center"
              >

                <div className="flex items-center gap-6">

                  <div className="bg-blue-950 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold">

                    {item.no}

                  </div>

                  <h2 className="text-2xl font-extrabold text-blue-950">

                    {item.title}

                  </h2>

                </div>

                <div>

                  <h3 className="text-green-700 font-bold text-lg">

                    Key Services

                  </h3>

                  <ul className="mt-4 space-y-2 text-gray-700">

                    {item.services.map((service, i) => (

                      <li key={i}>
                        • {service}
                      </li>

                    ))}

                  </ul>

                </div>

                <div>

                  <h3 className="text-blue-950 font-bold text-lg">

                    Our Promise

                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">

                    {item.promise}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
      
      {/* HOW WE WORK */}

      <section className="py-16 bg-[#f8fafc]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h1 className="text-4xl font-extrabold text-blue-950">

              How We Work

            </h1>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">

            {[
              "Discussion",
              "Gap Assessment",
              "Documentation",
              "Audit Support",
              "Ongoing Assistance",
            ].map((step, index) => (

              <div
                key={index}
                className="bg-white rounded-[24px] p-6 shadow-sm text-center"
              >

                <div className="text-4xl font-extrabold text-green-600">

                  0{index + 1}

                </div>

                <h3 className="mt-4 text-lg font-bold text-blue-950">

                  {step}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>
{/* FINAL CTA */}

<section className="py-20 bg-[#02103f] text-white">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <h1 className="text-5xl font-extrabold leading-tight">

      Need Professional GMP &
      <br />
      Regulatory Support?

    </h1>

    <p className="mt-8 text-xl text-gray-300 leading-9">

      Get expert consultation from One Hope Solution.

    </p>

    <div className="flex flex-wrap justify-center gap-5 mt-10">

      <a
        href="https://wa.me/919740802199"
        target="_blank"
      >

        <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 px-7 py-4 rounded-2xl font-bold text-lg">

          Chat on WhatsApp

        </button>

      </a>

      <a href="#contact">

        <button className="bg-white/10 border border-white/20 px-8 py-4 rounded-2xl text-lg font-bold">

          Contact Now

        </button>

      </a>

    </div>

  </div>

</section>

      {/* FOOTER */}

      <footer
        id="contact"
        className="bg-[#02103f] text-white py-10"
      >

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          <div>

            <h2 className="text-2xl font-extrabold">

              ONE HOPE SOLUTION

            </h2>

            <p className="mt-4 text-gray-300 leading-7 text-sm">

              GMP, Regulatory, Validation and AI-powered compliance solutions
              for Pharma, API, Food and Healthcare industries.

            </p>

          </div>

          <div>

            <h3 className="text-lg font-bold">

              SERVICES

            </h3>

            <div className="mt-4 space-y-2 text-gray-300 text-sm">

              <p>GMP Compliance</p>
              <p>Audit Support</p>
              <p>Validation</p>
              <p>Regulatory Affairs</p>

            </div>

          </div>

          <div>

            <h3 className="text-lg font-bold">

              CONTACT
<div className="mt-6">
  <h4 className="text-xl font-semibold mb-2">
    📍 Office Address
  </h4>

  <p>
    Nava Vaibhava Apartment
    <br />
    Sir M. Vishveshwaraya Road
    <br />
    Horamavu Agara
    <br />
    Horamavu
    <br />
    Bangalore, Karnataka
    <br />
    India
  </p>
</div>
            </h3>

            <div className="mt-4 space-y-2 text-gray-300 text-sm">

              <p>info@onehopesolution.com</p>
              <p>+91 9740802199</p>
              <p>www.onehopesolution.com</p>

            </div>

          </div>

          <div>

            <h3 className="text-lg font-bold">

              BUSINESS HOURS

            </h3>

            <div className="mt-4 space-y-2 text-gray-300 text-sm">

              <p>Monday - Saturday</p>
              <p>9:00 AM - 6:00 PM</p>
              <p>Online Consultation Available</p>
<div className="flex gap-6 mt-6 justify-center">

  <a
    href="https://linkedin.com"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn
  </a>

  <a
    href="https://youtube.com"
    target="_blank"
    rel="noreferrer"
  >
    YouTube
  </a>

  <a
    href="https://wa.me/91XXXXXXXXXX"
    target="_blank"
    rel="noreferrer"
  >
    WhatsApp
  </a>

  <a
    href="mailto:info@onehopesolution.com"
  >
    Email
  </a>

</div>
            </div>

          </div>

        </div>

      </footer>
{/* Mobile Sticky CTA */}

<div className="fixed bottom-0 left-0 right-0 lg:hidden bg-blue-950 p-3 z-40">

  <a href="/ai-interview-simulator">

    <button className="w-full bg-green-500 text-white py-3 rounded-xl font-bold">

      🚀 Start AI Interview

    </button>

  </a>

</div>

{/* WhatsApp Floating Button */}

<a
  href="https://wa.me/919740802199"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-16 right-6 z-50"
>

  <div className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl font-bold">

    💬 WhatsApp Chat

  </div>

</a>
{showVideo && (
  <div
    onClick={() => setShowVideo(false)}
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[90%] max-w-4xl aspect-video"
    >
      <iframe
        width="100%"
        height="100%"
        src={videoUrl}
        title="Video"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  </div>
)}
</div>
  );
}
export default HomePage;