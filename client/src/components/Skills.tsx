import { Progress } from "@/components/ui/progress";
import { Camera, Users, Smartphone, Brain } from "lucide-react";

export default function Skills() {
  const programmingSkills = [
    { name: "Swift", level: 95 },
    { name: "Objective-C", level: 85 },
    { name: "Python", level: 60 },
    { name: "C++", level: 70 },
  ];

  const frameworkSkills = [
    { name: "SwiftUI", level: 85 },
    { name: "UIKit", level: 88 },
    { name: "Core ML", level: 85 },
    { name: "Firebase", level: 92 },
  ];

  const specializations = [
    { icon: <Brain className="text-2xl" />, title: "AI/ML Integration" },
    { icon: <Camera className="text-2xl" />, title: "Media & Photography" },
    { icon: <Users className="text-2xl" />, title: "Social Platforms" },
    { icon: <Smartphone className="text-2xl" />, title: "UI/UX Design" },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-dark-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-sf-pro font-bold mb-6 gradient-text">Technical Skills</h2>
          <p className="text-xl text-gray-300 font-inter">Expertise in modern iOS development technologies</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Programming Languages */}
          <div className="space-y-8">
            <h3 className="text-2xl font-sf-pro font-bold text-electric-blue mb-8">Programming Languages</h3>
            
            <div className="space-y-6">
              {programmingSkills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between mb-3">
                    <span className="font-inter font-semibold text-white">{skill.name}</span>
                    <span className="font-inter text-electric-blue font-bold">{skill.level}%</span>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={skill.level} 
                      className="h-3 bg-gray-700"
                    />
                    <div className="skill-bar absolute inset-0"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Frameworks & Tools */}
          <div className="space-y-8">
            <h3 className="text-2xl font-sf-pro font-bold text-electric-blue mb-8">Frameworks & Tools</h3>
            
            <div className="space-y-6">
              {frameworkSkills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="flex justify-between mb-3">
                    <span className="font-inter font-semibold text-white">{skill.name}</span>
                    <span className="font-inter text-electric-blue font-bold">{skill.level}%</span>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={skill.level} 
                      className="h-3 bg-gray-700"
                    />
                    <div className="skill-bar absolute inset-0"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Specializations */}
        <div className="mt-20">
          <h3 className="text-2xl font-sf-pro font-bold text-center text-electric-blue mb-12">Specializations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {specializations.map((spec, index) => (
              <div key={spec.title} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-electric-blue to-cyan-bright rounded-full flex items-center justify-center group-hover:animate-glow-pulse transition-all duration-300">
                  <div className="text-white">
                    {spec.icon}
                  </div>
                </div>
                <h4 className="font-inter font-semibold text-white">{spec.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
