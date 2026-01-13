import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import all WL screenshots
import wl1 from "../assets/wl-1.webp";
import wl2 from "../assets/wl-2.webp";
import wl3 from "../assets/wl-3.webp";
import wl4 from "../assets/wl-4.webp";
import wl5 from "../assets/wl-5.webp";
import wl6 from "../assets/wl-6.webp";
import wl7 from "../assets/wl-7.webp";
import wl8 from "../assets/wl-8.webp";
import wl9 from "../assets/wl-9.webp";
import wl10 from "../assets/wl-10.webp";

const clients = [
  { id: 0, name: "APL", image: wl1 },
  { id: 1, name: "AutoFix", image: wl2 },
  { id: 2, name: "Avbob", image: wl3 },
  { id: 3, name: "Empwr", image: wl4 },
  { id: 4, name: "Quantum", image: wl5 },
  { id: 5, name: "RapidFunnel", image: wl6 },
  { id: 6, name: "Real Estate", image: wl7 },
  { id: 7, name: "SuperOne", image: wl8 },
  { id: 8, name: "Trio", image: wl9 },
  { id: 9, name: "Wealthy", image: wl10 },
];

export default function WhiteLabelEngine() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="projects" className="py-20 px-6 bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header: Centered at the top */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-sf-pro font-bold text-blue-500 uppercase tracking-[0.2em] drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            Flagship Engineering Showcase
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Logic */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-5xl md:text-6xl font-sf-pro font-bold text-white leading-tight">
                The White-Label <span className="text-blue-500">Engine</span>
              </h3>
              <p className="text-2xl text-gray-400 font-sf-pro font-medium">One Codebase. Infinite Brands.</p>
            </div>
            
            <p className="text-lg text-gray-300 font-inter leading-relaxed max-w-xl">
              I engineered a configuration-driven architecture where a single Swift codebase 
              deploys fully branded, distinct apps for varying corporate clients instantly. 
              This robust factory pattern handles unique assets, styling, and feature sets 
              through a centralized configuration engine.
            </p>

            <div className="space-y-4">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Active Client Deployments</p>
              <div className="flex flex-wrap gap-3">
                {clients.map((client) => (
                  <button
                    key={client.id}
                    onMouseEnter={() => {
                      setActiveIndex(client.id);
                      setIsPaused(true);
                    }}
                    onMouseLeave={() => setIsPaused(false)}
                    onClick={() => setActiveIndex(client.id)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border ${
                      activeIndex === client.id 
                        ? "bg-blue-500 border-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.6)] scale-105" 
                        : "bg-transparent border-white/20 text-gray-400 hover:border-white/50 hover:text-white"
                    }`}
                  >
                    {client.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Visual Proof */}
          <div 
            className="relative flex justify-center h-[600px] items-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Direct Image Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(59,130,246,0.2)] bg-black/20">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={clients[activeIndex].image}
                  alt={`${clients[activeIndex].name} App Interface`}
                  className="absolute inset-0 w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute -inset-10 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
