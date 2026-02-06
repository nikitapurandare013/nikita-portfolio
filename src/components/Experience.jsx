import { useState } from "react";

export default function Experience() {
  const [openLetter, setOpenLetter] = useState(null);

  const experiences = [
    {
      role: "GenAI Intern - Onsite",
      company: "Bajaj Finserv Direct Limited (Pune, India)",
      duration: "June 2025 – Sept 2025",
      letter: "/letters/Internship Completion Letter - Nikita Purandare.pdf",
      details: [
        "Built an AI-powered equity research assistant (Chatbot) for Indian and Foreign (US) markets using Azure OpenAI, FastAPI, Angular and RAG pipelines to process 500+ pages in <10 seconds with 83% retrieval accuracy for Indian market and 90% for foreign markets.",
        "Automated financial data extractions & analysis across PDFs, CSVs, Excel and transcripts etc. with confidence scoring and cutting the research time by 70%.",
        "Implemented login, session management, and conversation history retention features in the chatbot to improve user experience and continuity.",
        "Designed a cost optimization framework to monitor, evaluate, and compare models across various bots, enabling efficient tracking of token usage and formulating effective prompt optimization strategies.",
        "Deployed the framework on AWS EC2 for scalable and reliable execution."
      ],
    },
    {
      role: "AI/ML Intern - Hybrid",
      company: "Novel Group (Indore, India)",
      duration: "June 2024 – Sept 2024",
      letter: "/letters/Nikita LOR VY_C1.pdf",
      details: [
        "Developed an LLM pipeline using LangChain and Vertex AI (GCP) to improve prompt engineering workflows.",
        "Enhanced model response consistency by 80% through prompt refinement and iterative feedback loops.",
        "Automated structured PDF report generation from model outputs with integrated email workflows.",
        "Documented best practices for scalable and efficient LLM-based application development."
      ],
    },
  ];

  return (
    <section id="experience" className="relative noise-overlay py-20">
      <div className="absolute inset-0"></div>
      <div className="relative max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-300">
        Experience
      </h2>

      {openLetter !== null ? (
        <div className="space-y-4">
          <button
            onClick={() => setOpenLetter(null)}
            className="px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 transition"
          >
            ← Back
          </button>

          <iframe
            src={experiences[openLetter].letter}
            className="w-full h-[650px] border border-slate-700 rounded-lg shadow"
            title="Completion Letter"
          />
        </div>
      ) : (
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="border-l-2 border-blue-500/50 pl-6 p-5 rounded-lg
                         hover:bg-white/5 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-semibold text-blue-400 hover:text-blue-300 transition">
                  {exp.role}
                </h3>
                <p className="text-sm text-slate-400">{exp.duration}</p>
              </div>

              <p className="text-white/90 font-medium mb-3">
                {exp.company}
              </p>

              <ul className="list-disc list-inside space-y-2 mb-4">
                {exp.details.map((d, j) => (
                  <li
                    key={j}
                    className="text-white/80 hover:text-slate-300 transition-colors"
                  >
                    {d}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setOpenLetter(i)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
              >
                View Completion Letter
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </section>
  );
}
