import { useState } from "react";

function AIInterviewSimulator() {

  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
  });

  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  const [questionCount, setQuestionCount] = useState(0);

  const [report, setReport] = useState("");

  const [resume, setResume] = useState(null);

  // SESSION LIMIT

  const sessionsUsed =
    Number(localStorage.getItem("sessionsUsed")) || 0;

  const handleStart = async () => {

  if (sessionsUsed >= 2) {

    alert(
      "Free sessions completed. Please contact One Hope Solution."
    );

    return;
  }

  setLoading(true);

  try {

    console.log("Starting interview...");

    const response = await fetch(
      "https://onehope-live.onrender.com/api/ai-interview-start",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
  
  interest: formData.interest,
  name: formData.name,
}),
      }
    );

    console.log(response);

    if (!response.ok) {

  throw new Error("API failed");

}

const data = await response.json();

    console.log(data);

    setMessages([
      {
        role: "ai",
        text:
          data.question ||
          "Tell me about yourself and your professional background.",
      },
    ]);

    setQuestionCount(1);

    setStep(2);

  } catch (error) {

    console.error(error);

    alert("Interview start failed");

  }

  setLoading(false);
};

const sendMessage = async () => {

  if (!input.trim()) return;

  const updatedMessages = [
    ...messages,
    {
      role: "user",
      text: input,
    },
  ];
  console.log(updatedMessages);

  setMessages(updatedMessages);

  setInput("");

  setLoading(true);

  try {

   const response = await fetch(
  "https://onehope-live.onrender.com/api/ai-interview",
  {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      interest: formData.interest,
      name: formData.name,
    }),
  }
);


    const data = await response.json();

    if (data.reply) {

  const aiMessage = {
    role: "ai",
    text: data.reply,
  };

  setMessages((prev) => [
    ...prev,
    aiMessage,
  ]);

  setQuestionCount((prev) => prev + 1);

}

    if (data.finalReport) {

      setReport(data.finalReport);

    }

  } catch (error) {

    console.log(error);

  }

  setLoading(false);
};

  return (

    <div className="min-h-screen bg-[#f4f7fb] py-20 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="text-center">

          <h1 className="text-5xl font-bold text-blue-950">

            AI Interview Simulator

          </h1>

          <p className="mt-6 text-lg text-gray-600">

            Practice realistic AI-powered interviews
            based on your interests and resume.

          </p>

        </div>

        {step === 1 && (

          <div className="bg-white rounded-3xl shadow-xl p-10 mt-14">

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Your Name"
                className="border rounded-2xl p-4"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border rounded-2xl p-4"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />

              <select
                className="border rounded-2xl p-4"
                value={formData.interest}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    interest: e.target.value,
                  })
                }
              >

                <option value="">
                  Select Career Interest
                </option>

                <option>Software</option>
                <option>Pharma</option>
                <option>Data Analytics</option>
                <option>HR</option>
                <option>Finance</option>
                <option>Marketing</option>
                <option>Customer Support</option>
                <option>Accounts</option>
                <option>Mechanical</option>
                <option>Electrical</option>
                <option>Production</option>
                <option>R&D</option>

              </select>

              <input
                type="file"
                className="border rounded-2xl p-4"
                onChange={(e) =>
                  setResume(e.target.files[0])
                }
              />

            </div>

            <button
              onClick={handleStart}
              className="mt-8 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold"
            >
              Start AI Interview

            </button>

          </div>

        )}

        {step === 2 && (

          <div className="bg-white rounded-3xl shadow-xl p-8 mt-14">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold text-blue-950">

                Interview Session

              </h2>

              <div className="text-sm text-gray-500">

                Question {questionCount}/10

              </div>

            </div>

            <div className="space-y-6 max-h-[500px] overflow-y-auto">

              {messages.map((msg, index) => (

                <div
                  key={index}
                  className={`p-5 rounded-2xl ${
                    msg.role === "ai"
                      ? "bg-blue-50"
                      : "bg-green-100 ml-10"
                  }`}
                >

                  {msg.text}

                </div>

              ))}

              {loading && (

                <div className="bg-blue-50 p-5 rounded-2xl">

                  AI Interviewer is analyzing...

                </div>

              )}

            </div>

            {!report && (

              <div className="mt-8 flex gap-4">

                <textarea
                  value={input}
                  onChange={(e) =>
                    setInput(e.target.value)
                  }
                  placeholder="Type your answer..."
                  className="flex-1 border rounded-2xl p-5 h-32"
                />

                <button
                  onClick={sendMessage}
                  className="bg-blue-950 text-white px-8 rounded-2xl font-bold"
                >

                  Send

                </button>

              </div>

            )}

            {report && (

              <div className="bg-[#0b1f5e] text-white rounded-3xl p-10 mt-10">

                <h2 className="text-3xl font-bold">

                  Interview Feedback Report

                </h2>

                <div className="mt-6 whitespace-pre-line leading-8">

                  {report}

                </div>

                <div className="mt-10 flex flex-wrap gap-5">

                  <a
                    href="https://wa.me/919740802199"
                    target="_blank"
                  >

                    <button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl font-bold">

                      WhatsApp Consultation

                    </button>

                  </a>

                  <button className="bg-white text-blue-950 px-8 py-4 rounded-2xl font-bold">

                    Resume Review

                  </button>

                </div>

              </div>

            )}

          </div>

        )}

      </div>

    </div>

  );
}

export default AIInterviewSimulator;