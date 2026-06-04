export default function About() {
  const stats = [
    { label: "Apps Published", value: "45+" },
    { label: "Downloads", value: "50K+" },
    { label: "Years Experience", value: "5+" },
    { label: "App Store Rating", value: "4.8" },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-dark-secondary to-dark-bg">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-sf-pro font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-gray-300 font-inter">iOS Engineer | Swift & Objective-C</p>
        </div>
        
        <div className="space-y-8 bg-dark-card/40 p-8 md:p-16 rounded-[2.5rem] border border-electric-blue/20 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-electric-blue/10 blur-[80px] rounded-full"></div>
          
        <div className="max-w-3xl mx-auto space-y-8 text-center">
        <p className="text-xl text-gray-300 leading-relaxed font-inter relative z-10">
          I specialize in building secure, high-performance native iOS applications. A major career milestone includes scaling a <span className="text-electric-blue font-semibold">White-Label Engine</span> that powers 10+ enterprise apps from a single codebase, reducing client deployment time by 90%.
        </p>
        
        <p className="text-xl text-gray-300 leading-relaxed font-inter relative z-10">
          Beyond code, I bring a product mindset. From <span className="text-electric-blue font-semibold">Banking-grade security</span> and <span className="text-electric-blue font-semibold">HIPAA/GDPR-compliant HealthTech</span> to high-traffic <span className="text-electric-blue font-semibold">Media Streaming</span>, I focus on delivering code that is stable (99.9% crash-free), secure, and scalable.
        </p>
      </div>   

          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 relative z-10 border-t border-white/5">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-sf-pro font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400 font-inter text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
