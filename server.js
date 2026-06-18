
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
import multer from "multer";

dotenv.config();
console.log(
  "KEY LENGTH:",
  process.env.OPENAI_API_KEY?.length
);

const app = express();


app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const upload = multer({
  storage: multer.memoryStorage(),
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
console.log("FINAL REPORT REQUEST");
console.log(JSON.stringify(req.body, null, 2));
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
console.log("INTERACTIVE AUDIT REQUEST");
console.log(JSON.stringify(req.body, null, 2));
    const { messages } = req.body;
 console.log("MESSAGES RECEIVED:");
    console.log(
      JSON.stringify(messages, null, 2)
    );

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
console.log("AI RESPONSE:");
console.log(
  completion.choices[0].message.content
);
    res.json({

      reply:
        completion.choices[0].message.content

    });

  } catch (error) {

    console.error("INTERACTIVE AUDIT ERROR:");
console.error(error);
console.error("MESSAGE:");
  console.error(error.message);

    res.status(500).json({
      reply: "AI audit simulation error"
    });

  }

});
app.post("/api/ai-interview-start", async (req, res) => {

  console.log("INTERVIEW START BODY:");
  console.log(req.body);

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

interest === "HR"

? `You are a professional HR interviewer.

Candidate Name:
${name}

Rules:
- Ask ONLY HR interview questions
- Focus on recruitment, onboarding, employee relations, communication and conflict handling
- Never ask GMP, CAPA, validation, OOS or pharma questions
- Ask one concise professional question
- Keep interview realistic`

: interest === "Pharma"

? `You are a senior pharmaceutical interviewer.

Candidate Name:
${name}

Rules:
- Ask ONLY pharma interview questions
- Focus on QA, QC, GMP, CAPA, audits, validation and compliance
- Ask one concise professional question
- Keep interview realistic`

: `You are a professional interviewer.

Ask one realistic interview question based on candidate interest.`
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

  console.log("INTERVIEW BODY:");
  console.log(req.body);

  try {

    const {
      messages,
      interest,
      name,
    } = req.body;

let interviewPrompt = "";

if (interest === "HR") {

  interviewPrompt = `
You are a professional HR interviewer.

Rules:
- Ask only HR-related interview questions
- Focus on recruitment, employee relations, onboarding, communication and conflict management
- - Never ask GMP, CAPA, validation, OOS, deviation or compliance questions
- Ask one concise question at a time
- Ask follow-up questions based on previous answer
- Keep interview realistic and professional
- Limit interview to 5 questions
- Never restart the interview
- Never greet again after first question
- Continue naturally from previous answer
`;

}

else if (interest === "Pharma") {

  interviewPrompt = `
You are a senior pharmaceutical industry interviewer.

Rules:
- Ask about QA, QC, GMP, CAPA, validation, audits, deviations and compliance
- Ask realistic pharma interview questions
- Ask one concise question at a time
- Ask deep follow-up questions
- Keep interview professional and strict
- Limit interview to 5 questions
- Never restart the interview
- Never greet again after first question
- Continue naturally from previous answer
`;

}

else if (interest === "Software") {

  interviewPrompt = `
You are a senior software engineering interviewer.

Rules:
- Ask about coding, debugging, APIs, projects and architecture
- Ask one concise question at a time
- Keep interview realistic and professional
- Limit interview to 5 questions
- Never restart the interview
- Never greet again after first question
- Continue naturally from previous answer
`;

}

else {

  interviewPrompt = `
You are a professional interviewer.

Ask realistic interview questions based on candidate background.

Limit interview to 5 questions.
`;

}

const completion =
  await client.chat.completions.create({

    model: "gpt-4o-mini",

    messages: [

      {
        role: "system",
        content: interviewPrompt
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
    max_tokens: 250,

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
app.post("/api/clinical-protocol-analysis", async (req, res) => {

  try {

    const {
  protocolText,
  reviewType,
} = req.body;
 // ADD THE PROMPT SECTION HERE ↓↓↓

    let reviewPrompt = "";

    if (reviewType === "ICH-GCP Compliance") {

      reviewPrompt = `
You are an ICH-GCP compliance expert.

Review the protocol for:
- ICH-GCP compliance gaps
- Subject protection
- Ethics requirements
- Informed consent concerns
- Documentation requirements

Provide compliance score (0-100).
`;

    }

    else if (reviewType === "Endpoint Assessment") {

      reviewPrompt = `
You are a clinical endpoint specialist.

Review:
- Primary endpoint suitability
- Secondary endpoint suitability
- Statistical robustness
- Clinical relevance

Provide endpoint quality score (0-100).
`;

    }
else if (reviewType === "Regulatory Risk Assessment") {

  reviewPrompt = `
You are a global clinical regulatory expert.

Review:
- FDA risks
- EMA risks
- ICH compliance risks
- Ethics risks
- Inspection readiness

Provide:
- Risk Level
- Critical Findings
- Recommended Actions
`;
}

else if (reviewType === "Recruitment Feasibility") {

  reviewPrompt = `
You are a clinical operations expert.

Assess:
- Inclusion criteria feasibility
- Exclusion criteria impact
- Recruitment challenges
- Dropout risk
- Site burden

Provide recruitment feasibility score (0-100).
`;
}
 else if (reviewType === "Sample Size Assessment") {

  reviewPrompt = `
You are a biostatistics expert.

Review:
- Sample size adequacy
- Statistical power
- Study design assumptions
- Risk of underpowering

Provide Sample Size Adequacy Score (0-100).
`;
}
else if (reviewType === "Safety Monitoring Review") {

  reviewPrompt = `
You are a clinical safety expert.

Review:
- Safety endpoints
- AE monitoring
- SAE reporting
- Risk mitigation

Provide Patient Safety Score (0-100).
`;
}
else if (reviewType === "Protocol Amendment Impact") {

  reviewPrompt = `
You are a clinical development expert.

Assess:
- Operational impact
- Regulatory impact
- Recruitment impact
- Data integrity impact

Provide Amendment Risk Score (0-100).
`;
}  
else {

      reviewPrompt = `
You are a Senior Clinical Trial Protocol Reviewer.

Review the protocol and provide:

PROTOCOL SUMMARY

PRIMARY OBJECTIVE ASSESSMENT

INCLUSION CRITERIA ASSESSMENT

EXCLUSION CRITERIA ASSESSMENT

OPERATIONAL RISKS

REGULATORY RISKS

RECOMMENDED IMPROVEMENTS

PROTOCOL QUALITY SCORE (0-100)
`;
    }

    const completion =
      await client.chat.completions.create({

        model: "gpt-4o-mini",

        messages: [

          {
  role: "system",
  content: reviewPrompt
},

          {
            role: "user",
            content: protocolText
          }

        ],

        temperature: 0.3,
        max_tokens: 1000

      });

    res.json({

      result:
        completion.choices[0].message.content

    });

  } catch (error) {
  console.error("CLINICAL AI ERROR:");
  console.error(error);

  res.status(500).json({
    error: error.message,
    details: error
  });
}

});
app.get("/api/test-openai", async (req, res) => {
  try {

    const response =
      await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: "Say OK"
          }
        ]
      });

    res.json({
      success: true,
      result:
        response.choices[0].message.content
    });

  } catch (error) {

    console.error("OPENAI TEST ERROR");
    console.error(error);

    res.status(500).json({
      error: error.message,
      code: error.code,
      type: error.type
    });

  }
});
app.get("/api/version", (req, res) => {
  res.json({
    version: "June17-Test-001"
  });
});
const PORT = process.env.PORT || 5000;
app.get("/api/test-openai", async (req, res) => {
  try {
    const completion =
      await client.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: "Say OK"
          }
        ]
      });

    res.json({
      success: true,
      result:
        completion.choices[0].message.content
    });

  } catch (error) {

    console.error("OPENAI TEST ERROR");
    console.error(error);

    res.status(500).json({
      message: error.message,
      code: error.code,
      type: error.type
    });

  }
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});