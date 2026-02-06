export default function Resume() {
  return (
    <section id="resume" className="relative noise-overlay py-20 text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-300">Resume</h2>
      <p className="text-slate-600 mb-6 text-white">
        You can download my resume to learn more about my academic and professional journey.
      </p>
      <a
        href="/NikitaPurandare_Resume.pdf"
        download
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
    </section>
  );
}
