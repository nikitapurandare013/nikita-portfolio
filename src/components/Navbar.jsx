export default function Navbar() {
  return (
    <nav
      className="
        sticky top-0 z-50
        bg-[#0B1220]/85 backdrop-blur-xl
        shadow-lg shadow-blue-500/10
        border-b border-blue-500/20
        transition-all duration-300
      "
    >
      <div className="flex justify-between items-center px-10 py-3">
        {/* Left side */}
        <div className="flex items-center space-x-3">
          <img
            src="/linkedin.jpeg"
            alt="Nikita Purandare"
            className="w-10 h-10 rounded-full object-cover border border-gray-300 shadow-sm"
          />
          <h1 className="text-xl font-bold text-blue-300 tracking-wide">
            Nikita Purandare
          </h1>
        </div>

        {/* Right side */}
        <div className="space-x-8 text-gray-300 font-medium">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#experience" className="hover:text-blue-400">Experience</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#education" className="hover:text-blue-400">Education</a>
          <a href="#resume" className="hover:text-blue-400">Resume</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}
