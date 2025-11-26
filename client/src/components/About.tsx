export default function About() {
  const stats = [
    { label: "Apps Published", value: "45+" },
    { label: "Downloads", value: "50K+" },
    { label: "Years Experience", value: "5+" },
    { label: "App Store Rating", value: "4.8" },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-b from-dark-secondary to-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-sf-pro font-bold mb-6 gradient-text">About Me</h2>
          <p className="text-xl text-gray-300 font-inter">Passionate iOS developer creating impactful mobile experiences</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-lg text-gray-300 leading-relaxed font-inter">
              I'm a dedicated iOS developer with a passion for creating innovative mobile applications that solve real-world problems. With expertise in Swift, SwiftUI, and modern iOS frameworks, I specialize in building intelligent, user-friendly apps that enhance people's daily lives.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed font-inter">
              My portfolio includes <span className="text-electric-blue font-semibold">Social Boom</span>, a revolutionary digital business card platform, <span className="text-electric-blue font-semibold">Kameti</span> for committee management, and <span className="text-electric-blue font-semibold">Kapture</span>, a creative social platform for photographers. I focus on combining cutting-edge technology with elegant design.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-sf-pro font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-400 font-inter">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            {/* Developer workspace with code on screen */}
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600"
              alt="iOS Developer workspace with code and devices"
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-electric-blue/20 to-transparent rounded-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-electric-blue to-cyan-bright rounded-full flex items-center justify-center animate-glow-pulse">
              <div className="text-white text-2xl">⚡</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
