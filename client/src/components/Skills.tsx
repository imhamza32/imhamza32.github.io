import { Building2, ShieldCheck, PlayCircle, CreditCard, Briefcase, Shield, Play, Lock } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Core",
      skills: ["Swift", "Objective-C", "JavaScript"]
    },
    {
      title: "iOS Frameworks",
      skills: ["SwiftUI", "UIKit", "Combine", "AVFoundation (Media)", "Core ML", "XCTest"]
    },
    {
      title: "Architecture & Data",
      skills: ["White-Label Systems", "Offline-First Sync", "MVVM/Clean Arch", "Core Data", "GCD (Concurrency)"]
    },
    {
      title: "Security & DevOps",
      skills: ["Biometrics (FaceID)", "Keychain", "CI/CD (Xcode Cloud)", "Fastlane", "Firebase"]
    }
  ];

  const specializations = [
    { icon: <Briefcase className="text-2xl" />, title: "Enterprise SaaS" },
    { icon: <Shield className="text-2xl" />, title: "HealthTech & Security" },
    { icon: <Play className="text-2xl" />, title: "Media & Streaming" },
    { icon: <Lock className="text-2xl" />, title: "FinTech/Banking" },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-dark-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-sf-pro font-bold mb-6 gradient-text">Senior Expertise</h2>
          <p className="text-xl text-gray-300 font-inter">Mastery across 4 core engineering pillars</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-dark-card/50 p-8 rounded-3xl border border-electric-blue/10 hover:border-electric-blue/30 transition-all duration-300">
              <h3 className="text-xl font-sf-pro font-bold text-electric-blue mb-6">{category.title}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-300 font-inter flex items-center">
                    <span className="w-1.5 h-1.5 bg-electric-blue rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Specializations */}
        <div className="mt-20">
          <h3 className="text-2xl font-sf-pro font-bold text-center text-electric-blue mb-12 uppercase tracking-widest">Industry Specializations</h3>
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
