export default function Education() {
  const education = [
    {
      degree: "M.tech (Dual Degree) Artificial Intelligence and Data Science",
      institution: "School of Data Science and Forecasting, DAVV Indore",
      duration: "2021 – 2026 (Expected)",
      details: [
        "CGPA: 8.13/10 (Till 8th Semester)",
      ],
    },
    {
      degree: "Higher Secondary Education (Class XII)",
      institution: "Chameli Devi Public School, Indore (CBSE Board)",
      duration: "2020 – 2021",
      details: [
        "Secured 79.8%  in PCM + I.T. stream.",
      ],
    },
  ];

  return (
  <section id="education" className="max-w-7xl mx-auto py-20 px-6">
    <h2 className="text-3xl font-bold text-center mb-10 text-blue-300">
      Education
    </h2>

    <div className="space-y-8">
      {education.map((edu, i) => (
        <div
          key={i}
          className="
            border-l-4 border-blue-500/60
            pl-6 p-5 rounded-lg
            bg-white/5
            backdrop-blur-sm
            hover:bg-white/10
            transition
          "
        >
          <h3 className="text-xl font-semibold text-white hover:text-blue-300 transition">
            {edu.degree}
          </h3>

          <p className="text-white/80">
            {edu.institution}
          </p>

          <p className="text-sm text-slate-300 mb-3">
            {edu.duration}
          </p>

          <ul className="list-disc list-inside text-white/80 space-y-1.5 leading-relaxed">
            {edu.details.map((d, j) => (
              <li key={j} className="hover:text-slate-300 transition">
                {d}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);
}