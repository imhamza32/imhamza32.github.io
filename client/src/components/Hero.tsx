import { Button } from "@/components/ui/button";
import { Download, Smartphone } from "lucide-react";
import profileImg from "@assets/profile_1768274891657.png";

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative hero-gradient overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/10 to-transparent"></div>
      
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto space-y-8">
        <div className="animate-float relative">
          {/* Professional profile image with Electric Blue Glow */}
          <div className="absolute inset-0 bg-electric-blue/20 blur-[60px] rounded-full scale-150"></div>
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-electric-blue to-cyan-bright p-1 animate-glow-pulse relative z-10 overflow-hidden">
            <div className="w-full h-full rounded-full bg-[#1a1a1a] border-4 border-[#1a1a1a] overflow-hidden">
              <img 
                src={profileImg} 
                alt="Munib Hamza - Senior iOS Architect" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-sf-pro font-bold animate-slide-up text-white">
            Architecting Scalable Mobile Experiences
          </h1>
          
          <h2 className="text-xl md:text-3xl font-sf-pro font-bold animate-slide-up text-blue-500" style={{ animationDelay: '0.1s', textShadow: '0 0 10px rgba(59, 130, 246, 0.3)' }}>
            Senior iOS Architect & Product Engineer
          </h2>
        </div>
        
        <div className="space-y-6">
          <p className="text-base md:text-lg text-gray-400 font-inter animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Specializing in White-Label Engines, HIPAA-Compliant HealthTech, and High-Performance Enterprise Apps.
          </p>
          
          <p className="text-sm md:text-base text-cyan-bright font-inter animate-slide-up" style={{ animationDelay: '0.3s' }}>
            📱 45+ Published iOS Apps | 📈 1M+ Downloads | 🏢 Based in Ilmenau, Thuringia Germany
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up pt-4" style={{ animationDelay: '0.6s' }}>
          <Button
            onClick={scrollToProjects}
            className="px-12 py-4 bg-electric-blue hover:bg-cyan-bright text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 animate-glow-pulse font-inter"
          >
            <Smartphone className="mr-2 h-5 w-5" />
            View My Apps
          </Button>
          <a 
            href="/attached_assets/resume_1768274895427.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            download="Munib_Hamza_Resume"
          >
            <Button
              variant="outline"
              className="px-12 py-4 border-2 border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white font-semibold rounded-full transition-all duration-300 font-inter w-full sm:w-auto"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </a>
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
