import { useState } from "react";

function ClinicalProtocolAI() {

  const [protocolText, setProtocolText] = useState("");
  const [result, setResult] = useState("");
  const [reviewType, setReviewType] = useState("Protocol Review");
const [loading, setLoading] = useState(false);
  const handleAnalyze = async () => {
 setLoading(true);
    try {

      const response = await fetch(
        "https://onehope-website.onrender.com/api/clinical-protocol-analysis",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
  protocolText,
  reviewType,
}),
        }
      );

      const data = await response.json();

      setResult(data.result);
      setLoading(false);

    } catch (error) {
  console.error(error);
  setLoading(false);
  alert(error.message);
}

  };
document.title =
  "Clinical Trial Protocol Intelligence AI | One Hope Solution";
  return (

    <div className="max-w-5xl mx-auto p-10">

      <h1 className="text-4xl font-bold text-blue-950 mb-4">
        Clinical Trial Protocol Intelligence AI
      </h1>

      <p className="text-gray-600 mb-8">
        Paste a Clinical Trial Protocol and receive an
        AI-powered scientific and regulatory assessment.
      </p>

      <div className="border rounded-lg p-6">
<select
  value={reviewType}
  onChange={(e) => setReviewType(e.target.value)}
  className="border p-2 rounded mb-4 w-full"
>
  <option>Protocol Review</option>
  <option>ICH-GCP Compliance</option>
  <option>Endpoint Assessment</option>
  <option>Regulatory Risk Assessment</option>
  <option>Recruitment Feasibility</option>
  <option>Sample Size Assessment</option>
  <option>Safety Monitoring Review</option>
  <option>Protocol Amendment Impact</option>
</select>
        <textarea
          rows="10"
          value={protocolText}
          onChange={(e) =>
            setProtocolText(e.target.value)
          }
          placeholder="Paste Clinical Trial Protocol here..."
          className="w-full border p-3 rounded"
        />

        <button
  onClick={handleAnalyze}
  disabled={loading}
  className="mt-6 bg-blue-950 text-white px-6 py-3 rounded"
>
  {loading ? "Analyzing..." : "Analyze Protocol"}
</button>

        {result && (
  <div className="mt-6 border rounded p-4 bg-gray-50">

    <h3 className="font-bold text-lg mb-4">
      AI Clinical Review
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">

  <div className="bg-white border rounded p-4">

    <h4 className="font-bold text-blue-900">
      Review Type
    </h4>

    <p>
      {reviewType}
    </p>

  </div>

  <div className="bg-white border rounded p-4">

    <h4 className="font-bold text-blue-900">
      Status
    </h4>

    <p>
      Completed
    </p>

  </div>

  <div className="bg-white border rounded p-4">

    <h4 className="font-bold text-blue-900">
      AI Engine
    </h4>

    <p>
      GPT-4o Clinical Review
    </p>

  </div>

</div>

    <div className="bg-white border rounded p-4">

  <pre className="whitespace-pre-wrap text-sm">
    {result}
  </pre>

</div>

  </div>
)}

      </div>

    </div>

  );
}

export default ClinicalProtocolAI;