export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6 text-blue-300">Contact Me</h2>
      <p className="text-slate-600 mb-8 text-white">
        Feel free to reach out for collaborations, opportunities, or just a friendly chat!
      </p>
      <div className="space-x-6">
        <a href="mailto:nikita01034@gmail.com" className="text-blue-300 hover:underline">Email</a>
        <a href="https://github.com/nikitapurandare013" target="_blank" className="text-blue-300 hover:underline">GitHub</a>
        <a href="https://www.linkedin.com/in/nikita-purandare-11b281247/" target="_blank" className="text-blue-300 hover:underline">LinkedIn</a>
      </div>
    </section>
  );
}
