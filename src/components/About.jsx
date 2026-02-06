import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-300">About Me</h2>

        <p className="text-slate-700 leading-relaxed text-lg mb-4 text-white">
          I’m an <span className="font-semibold">Artificial Intelligence and Data Science Enthusiast </span> 
          who enjoys transforming complex data into intelligent systems that feel intuitive and human-centric.
        </p>

        <p className="text-slate-700 leading-relaxed text-lg mb-4 text-white">
          From machine learning models to generative AI pipelines, I focus on building solutions that are not just technically sound but also meaningful in real-world use. I’m deeply interested in how data fuels smarter decisions and how AI can simplify complexity at scale.
        </p>

        <p className="text-slate-700 leading-relaxed text-lg text-white">
          I thrive in environments that value experimentation, learning, and innovation — and I’m motivated to contribute to AI systems that create measurable impact.
        </p>

        <p className="text-blue-300 font-medium text-center italic mt-6 ">
          “Where data meets creativity — that’s where intelligence truly begins.”
        </p>
      </motion.div>
    </section>
  );
}
