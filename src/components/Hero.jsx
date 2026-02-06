import { motion } from "framer-motion";
import humanAI from "../assets/Human_AI.jpg";
import ai from "../assets/AI.jpg";
import futureAI from "../assets/Future_AI.jpg";


export default function Hero() {
  return (
    <section
      className="relative noise-overlay h-[80vh] flex flex-col justify-center items-center text-center px-6"
      id="home"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]
        bg-[linear-gradient(to_right,#3b82f61a_1px,transparent_1px),
        linear-gradient(to_bottom,#3b82f61a_1px,transparent_1px)]
        bg-[size:40px_40px]"
      ></div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-white"
      >
        Hi, I'm <span className="text-blue-300">Nikita Purandare</span>
      </motion.h1>

      {/* Subtitle */}
      <p className="text-lg max-w-xl mb-6 text-white/90">
        Artificial Intelligence and Data Science Enthusiast — fuelled by curiosity,
        driven by data, and powered by AI to build intelligent solutions that make a difference.
      </p>

      {/* CTA Buttons */}
      <div className="space-x-4">
        <a
          href="#projects"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-blue-600 text-blue-400 px-4 py-2 rounded-lg
            hover:bg-blue-600 hover:text-white transition"
        >
          Contact Me
        </a>
      </div>

      {/* 🔥 AI Images BELOW buttons */}
      <div className="mt-10 flex gap-6 justify-center items-center flex-wrap">
        {[humanAI, ai, futureAI].map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt="AI visual"
            className="w-28 h-28 md:w-40 md:h-40
              rounded-xl p-3 bg-[#0B1220]/70
              shadow-lg shadow-blue-500/15
              opacity-80 hover:opacity-100 transition"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}
