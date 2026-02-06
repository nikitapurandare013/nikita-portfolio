export default function Footer() {
  return (
    <footer className="bg-[#0B1220]/70 backdrop-blur-xl shadow-lg shadow-blue-500/10 border-t border-blue-500/20 text-center py-6 text-slate-400 text-sm">
      © {new Date().getFullYear()} Nikita Purandare — All Rights Reserved.
    </footer>
  );
}