import {
  Routes,
  Route,
} from "react-router-dom";

import AuditSimulator from "./pages/AuditSimulator";
import logo from "./assets/logo.png";
import heroImage from "./assets/hero-pharma.jpg";

import {
  FaWhatsapp,
  FaRobot,
  FaIndustry,
  FaClipboardCheck,
  FaCertificate,
  FaFlask,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {

    if (!name || !company || !email) {
      alert("Please fill Name, Company and Email");
      return;
    }

    if (!question) {
      alert("Please enter your question");
      return;
    }

    setLoading(true);

    try {

      const response = await fetch(
        "https://onehope-live.onrender.com/api/ask-ai",
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

  const services = [

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
      icon: <FaIndustry />,
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
      icon: <FaClipboardCheck />,
    },

    {
      no: "03",
      title: "QMS & ISO CERTIFICATION",
      services: [
        "QMS Setup",
        "ISO Certifications",
        "Documentation",
      ],
      promise:
        "End-to-end quality management system implementation.",
      icon: <FaCertificate />,
    },

    {
      no: "04",
      title: "REGULATORY & DOSSIER",
      services: [
        "CTD/eCTD",
        "Documentation",
        "Submissions",
      ],
      promise:
        "Regulatory support for approvals and exports.",
      icon: <FaClipboardCheck />,
    },

    {
      no: "05",
      title: "VALIDATION & QUALIFICATION",
      services: [
        "Process Validation",
        "Equipment Qualification",
        "HVAC Testing",
      ],
      promise:
        "Validation and qualification as per GMP standards.",
      icon: <FaFlask />,
    },

    {
      no: "06",
      title: "TRAINING & SUPPORT",
      services: [
        "GMP Training",
        "Staff Readiness",
        "Compliance Coaching",
      ],
      promise:
        "Practical training and audit preparation support.",
      icon: <FaClipboardCheck />,
    },

  ];

  return (

  <Routes>

    <Route
      path="/"
      element={

        <div className="min-h-screen bg-[#f4f7fb] flex flex-col items-center justify-center text-center px-6">

          <h1 className="text-6xl font-extrabold text-blue-950">

            ONE HOPE SOLUTION

          </h1>

          <p className="mt-8 text-2xl text-gray-600 max-w-3xl leading-10">

            GMP Compliance, Regulatory Affairs,
            Audit Readiness & AI-Powered Pharma Solutions

          </p>

          <div className="mt-12 flex gap-6">

            <a href="/ai-audit-simulator">

              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg">

                Launch AI Audit Simulator

              </button>

            </a>

          </div>

        </div>

      }
    />

    <Route
      path="/ai-audit-simulator"
      element={<AuditSimulator />}
    />

  </Routes>

);
}

export default App;
