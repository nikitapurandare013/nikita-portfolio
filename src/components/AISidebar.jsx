import { useState, useEffect } from "react";
import { Brain, Cpu, Bot, Database, Shield, Cloud, EyeClosedIcon, EyeIcon } from "lucide-react";

export default function AISidebar() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--sidebar-width",
      open ? "16rem" : "3.5rem"
    );
  }, [open]);

  return (
    <div
      className={`fixed top-0 left-0 h-screen z-40
        ${open ? "w-64" : "w-14"}
        transition-all duration-300
        bg-[#0B1220]/90 backdrop-blur-xl
        shadow-lg shadow-blue-500/10
        border-r border-blue-500/20
      `}
    >
      {/* HAMBURGER */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center gap-4 px-4 py-6 cursor-pointer hover:bg-white/10"
      >
        <div className="flex flex-col justify-between w-6 h-4">
          <span className="h-0.5 w-full bg-blue-400 rounded" />
          <span className="h-0.5 w-full bg-blue-400 rounded" />
          <span className="h-0.5 w-full bg-blue-400 rounded" />
        </div>
        {open && <span className="text-sm text-white/80">Menu</span>}
      </div>

      {/* PROFILE */}
      {open && (
        <div className="px-4 mt-2">
          <div className="rounded-lg bg-white/5 p-3 border border-white/10">
            <p className="text-sm font-semibold text-white">
              AI Enthusiast
            </p>
            <p className="text-xs text-white/60 mt-1">
              Building Modern AI systems
            </p>
          </div>
        </div>
      )}

      {/* FOCUS */}
      <div className="px-4 mt-6 space-y-2 text-white">
        {open && (
          <h3 className="text-blue-400 font-semibold text-xs uppercase tracking-wide mb-2">
            My Core Interests
          </h3>
        )}

        <SidebarItem icon={<Bot size={18} />}label="AI Agents & Intelligent Systems" open={open} />
        <SidebarItem icon={<Database size={18} />} label="RAG & Vector Search System" open={open} />
        <SidebarItem icon={<Cpu size={18} />} label="Machine Learning & Predictive Modeling" open={open} />
        <SidebarItem icon={<EyeIcon size={18} />} label="Computer Vision & Visual Intelligence" open={open} />
        <SidebarItem icon={<Brain size={18} />}label="Model Deployment & End to End Pipeline" open={open} />
        <SidebarItem icon={<Shield size={18} />}label="AI Ethics & Responsible AI" open={open} />
        <SidebarItem icon={<Cloud size={18} />}label="Scalable AI Infrastructure & Cloud" open={open} />
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, open }) {
  return (
    <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/10 cursor-pointer">
      <span className="text-blue-400">{icon}</span>
      {open && <span className="text-sm text-white/80">{label}</span>}
    </div>
  );
}

