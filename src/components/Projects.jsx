const projects = [
  {
    title: "UniGuide University Assistant Chatbot",
    description: "An LLM-powered university Q&A system using Groq API with RAG architecture, vector search, and real document-based answers for lightning-fast, accurate responses.",
    tools: ["Python", "LangChain", "Groq API", "RAG", "Vector Search","HTML", "CSS", "JavaScript"],
    link: "https://github.com/nikitapurandare013/DAVV_Assistant_Chatbot"
  },
  {
    title: "Question Answering with PDFs (RAG using LlamaIndex & Google Gemini)",
    description: "A document-aware Q&A system combining LlamaIndex retrieval with Google Gemini’s generative power, featuring efficient embeddings and a Streamlit-based interactive interface.",
    tools: ["Python", "LamaIndex", "Google Gemini", "RAG", "Embeddings", "Streamlit"],
    link: "https://github.com/nikitapurandare013/RAG-Implementation-With-LlamaIndex-Google-Gemini"
  },
  {
    title: "Dynamic Portfolio Allocation using Reinforcement Learning",
    description: "An RL-powered crypto investment framework employing Deep Q-Learning (DQL) and PPO to intelligently optimize fund allocation, maximize returns, and minimize risks in volatile markets.",
    tools: ["Python", "Sklearn", "TensorFlow", "Keras", "DQL", "PPO"],
    link: "https://github.com/nikitapurandare013/Dynamic-Portfolio-Allocation-Using-Reinforcement-Learning-"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-transparent"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-300">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="
              h-full flex flex-col
              border border-blue-500/20
              rounded-2xl p-6
              bg-white/5
              backdrop-blur-sm
              hover:bg-white/10
              transition duration-300
            "
          >
            {/* Project Title */}
            <h3 className="text-xl font-semibold mb-3 text-blue-400 hover:text-blue-200 transition">
              {p.title}
            </h3>

            {/* Description */}
            <p className="text-white/80 mb-4 leading-relaxed">
              {p.description}
            </p>

            {/* Tools */}
            <p className="text-sm text-blue-200 mb-6">
              {p.tools.join(" • ")}
            </p>

            {/* CTA pinned to bottom */}
            <a
              href={p.link}
              className="mt-auto text-blue-200 font-medium hover:text-blue-300 transition"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
