import { motion } from "framer-motion";
import Tech from "../assets/Tech.jpg";

export default function Skills() {
  const skillGroups = {
    "Languages": ["Python", "C/C++", "R"],
    "Databases & Data Management": ["SQL", "NoSQL (MongoDB)", "Vector Databases (FAISS, Chroma)"],
    "Machine Learning & Deep Learning": ["Scikit-learn", "TensorFlow", "Keras"],
    "NLP & LLMs": [
      "spaCy", "NLTK", "Sentence-Transformers", "GPT", "LangChain","LangGraph",
      "LlamaIndex", "OpenAI", "Groq", "Gemini", "Claude", "Azure OpenAI"
    ],
    "Web & APIs": ["Flask", "FastAPI", "Django", "Streamlit", "HTML", "CSS", "Angular","React"],
    "Cloud & DevOps": ["GCP", "AWS", "Git", "Docker"],
    "Data & Visualization": ["Pandas", "NumPy", "Power BI", "Matplotlib", "Time Series Forecasting"],
    "Mathematics & Statistics": [
      "Statistics", "Probability", "Linear Algebra", 
      "Hypothesis Testing", "Regression Analysis", "ANOVA", "Graph Theory"
    ],
    "Other": ["OOPs", "DSA", "Prompt Engineering", "Communication Skills", "Teamwork"]
  };

  return (
    <section id="skills" className="relative py-24 noise-overlay">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_2fr] gap-14 items-start">

        {/* LEFT: AI VISUAL / INTRO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="sticky top-32"
        >
          <h2 className="text-4xl font-bold text-blue-300 mb-4">
            Skills & Stack
          </h2>

          <p className="text-white/70 leading-relaxed mb-8">
            A focused blend of <span className="text-blue-300">AI engineering,
            machine learning, and full-stack development,</span> —
            optimized for real-world intelligent systems.
          </p>

          {/* AI IMAGE */}
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-600/20 blur-2xl rounded-xl"></div>
            <img
              src={Tech}  
              alt="AI Core"
              className="relative rounded-xl border border-blue-500/20"
            />
          </div>
        </motion.div>

        {/* RIGHT: SKILLS GRID */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {Object.entries(skillGroups).map(([category, skills], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="
                bg-white/5 backdrop-blur-sm
                border border-blue-500/20
                rounded-2xl p-5
                hover:bg-white/10 hover:-translate-y-1
                transition-all
              "
            >
              <h3 className="text-blue-300 font-semibold text-sm uppercase tracking-wide mb-3">
                {category}
              </h3>

              <ul className="space-y-1.5 text-white/80 text-sm">
                {skills.map((skill, j) => (
                  <li
                    key={j}
                    className="hover:text-blue-200 transition"
                  >
                    • {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
