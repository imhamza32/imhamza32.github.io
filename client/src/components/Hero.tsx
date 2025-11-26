import { Button } from "@/components/ui/button";
import { Download, Smartphone } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // Implementation for resume download
    console.log("Download resume clicked");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative hero-gradient">
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-transparent"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 animate-float">
          {/* Professional profile image placeholder */}
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-electric-blue to-cyan-bright p-1 animate-glow-pulse">
            <div className="w-full h-full rounded-full bg-dark-secondary flex items-center justify-center">
              <div className="text-6xl text-electric-blue">👨‍💻</div>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-sf-pro font-bold mb-4 animate-slide-up">
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text glow-text">Munib Hamza</span>
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-sf-pro font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="gradient-text glow-text">iOS Developer</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 font-inter animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Building innovative mobile experiences with Swift & SwiftUI
        </p>
        
        <p className="text-lg text-cyan-bright mb-12 font-inter animate-slide-up" style={{ animationDelay: '0.3s' }}>
          📱 45+ Published iOS Apps | 📈 1M+ Downloads | 🏢 Based in Ilmenau, Thuringia Germany
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button
            onClick={scrollToProjects}
            className="px-12 py-4 bg-electric-blue hover:bg-cyan-bright text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 animate-glow-pulse font-inter"
          >
            <Smartphone className="mr-2 h-5 w-5" />
            View My Apps
          </Button>
          <Button
            onClick={downloadResume}
            variant="outline"
            className="px-12 py-4 border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white font-semibold rounded-full transition-all duration-300 font-inter"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-electric-blue rounded-full animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyan-bright rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-blue-glow rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
}
