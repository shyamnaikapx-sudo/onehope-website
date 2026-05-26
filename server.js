
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});



// EXISTING AI CONSULTANT API

app.post("/api/ask-ai", async (req, res) => {

  try {

    const { question, mode } = req.body;

    let systemPrompt = "";

    if (mode === "Interview Preparation") {

      systemPrompt =
        "You are a Pharma interview trainer. Ask interview questions and evaluate answers professionally.";

    }

    else if (mode === "GMP Training") {

      systemPrompt =
        "You are a GMP training expert teaching Pharma GMP concepts step-by-step.";

    }

    else if (mode === "QA/QC Training") {

      systemPrompt =
        "You are a Pharma QA/QC trainer helping users learn SOPs, validation, deviations and documentation.";

    }

    else if (mode === "Regulatory Affairs") {

      systemPrompt =
        "You are a Regulatory Affairs trainer helping users learn dossier preparation, compliance and country regulations.";

    }

    else if (mode === "Audit Training") {

      systemPrompt =
        "You are a GMP audit trainer helping users prepare for inspections, observations and CAPA handling.";

    }

    else {

      systemPrompt =
        "You are a Pharma GMP, ISO, FSSAI and Regulatory expert consultant.";

    }

    const response =
      await client.chat.completions.create({

        model: "gpt-4o-mini",

        messages: [

          {
            role: "system",
            content: systemPrompt,
          },

          {
            role: "user",
            content: question,
          },

        ],

      });

    res.json({

      answer:
        response.choices[0].message.content,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      answer: "AI server error",
    });

  }

});



// FINAL AUDIT REPORT API

app.post("/api/final-audit-report", async (req, res) => {

  try {

    const {
      auditType,
      answers,
    } = req.body;


    const completion =
      await client.chat.completions.create({

        model: "gpt-4o-mini",

        messages: [

          {
            role: "system",

            content:
  `You are a senior ${auditType} auditor.

Evaluate the complete audit responses professionally.

Provide report in this exact structure:

AUDIT READINESS SCORE:
(percentage)

STRENGTHS:
(bullet points)

WEAKNESSES:
(bullet points)

CRITICAL OBSERVATIONS:
(bullet points)

SUGGESTED CAPA:
(bullet points)

FINAL CONCLUSION:
(summary)

Keep response professional, concise and enterprise-grade.`

          },

          {
            role: "user",

            content:
              JSON.stringify(answers)

          }

        ],

        temperature: 0.3,
        max_tokens: 800,

      });

    res.json({

      result:
        completion.choices[0].message.content

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Report generation failed"
    });

  }

});

app.post("/api/interactive-audit", async (req, res) => {

  try {

    const { messages } = req.body;


    const completion =
      await client.chat.completions.create({

        model: "gpt-4o-mini",

        messages: [

          {
            role: "system",

            content:
              `You are a senior GMP auditor conducting a realistic pharma GMP inspection simulation.

Ask one audit question at a time.

Analyze the user's response professionally.

If response is:
- strong → appreciate compliance
- partial → identify moderate gaps
- weak → identify critical GMP risks

Keep simulation realistic and professional.

Limit total audit conversation to 5 questions maximum.

After 5 questions:
provide:
- audit readiness observations
- key compliance gaps
- improvement recommendations

Then recommend professional audit support from One Hope Solution.`
          },

      ...(messages || []).map((m) => ({

  role:
    m.role === "ai"
      ? "assistant"
      : "user",

  content:
    m.text || "No response"

}))
        ],

        temperature: 0.3,
        max_tokens: 500,

      });

    res.json({

      reply:
        completion.choices[0].message.content

    });

  } catch (error) {

    console.error("INTERACTIVE AUDIT ERROR:");
console.error(error);

    res.status(500).json({
      reply: "AI audit simulation error"
    });

  }

});
app.post("/api/ai-interview-start", async (req, res) => {

  try {

    const {
      interest,
      name,
    } = req.body;

    const completion =
      await client.chat.completions.create({

        model: "gpt-4o-mini",

        messages: [

          {
            role: "system",

            content:
`You are a professional AI interviewer.

Candidate Name:
${name}

Career Interest:
${interest}

Start a realistic interview.

Ask ONE professional interview question.

Keep it realistic and engaging.`
          }

        ],

        temperature: 0.5,
        max_tokens: 150,

      });

    res.json({

      question:
        completion.choices[0].message.content

    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      question: "Interview start failed"
    });

  }

});



app.post("/api/ai-interview", async (req, res) => {

  try {

    const {
      messages,
      interest,
      name,
    } = req.body;

const completion =
  await client.chat.completions.create({

    model: "gpt-4o-mini",

  messages: [

  {
    role: "system",

    content:
`You are a senior pharmaceutical industry interviewer.

Candidate Name:
${name}

Career Interest:
${interest}

You are already in the middle of an ongoing interview.

STRICT RULES:

- Never restart interview
- Never greet again
- Never say "thank you for joining"
- Never ask generic introductory questions
- Never repeat previous questions
- Focus ONLY on the candidate's latest answer
- Ask sharp professional follow-up questions
- Behave like a real hiring manager

INTERVIEW STYLE:

If candidate says:
"Method validation"

DO:
- ask about accuracy
- ask about precision
- ask about robustness
- ask about OOS handling
- ask about ICH guidelines
- ask practical challenges

If candidate says:
"CAPA"

DO:
- ask about root cause analysis
- ask about effectiveness checks
- ask about investigation approach

If candidate says:
"QA"

DO:
- ask deviation handling
- ask GDP
- ask audits
- ask compliance scenarios

If candidate gives short answers:
- professionally push deeper
- ask for examples
- ask for technical explanation

Ask ONLY ONE question at a time.

Do not repeat previous concepts.

Interview should feel realistic and technically strong.`
  },

  ...(messages || []).map((m) => ({

    role:
      m.role === "ai"
        ? "assistant"
        : "user",

    content:
      m.text || "No response"

  }))

],

    temperature: 0.5,
    max_tokens: 300,

  });

    res.json({

      reply:
        completion.choices[0].message.content

    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      reply: "AI interview error"
    });

  }

});
app.listen(5000, () => {

  console.log("Server running on port 5000");

});