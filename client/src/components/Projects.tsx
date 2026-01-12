import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Play, Camera, Users, CheckCircle, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { SiGithub } from "react-icons/si";
import socialBoomImage from "@assets/Social Boom_1755689713972.png";
import qCardImage from "@assets/QCard_1755689713972.png";
import kametiImage from "@assets/Kameti_1755689713969.png";
import linkpodImage from "@assets/Linkpod_1755689713970.png";
import builbeeImage from "@assets/Builbee_1755689713966.png";
import openBordersiPhoneImage from "@assets/openBordersiPhone_1755689713971.png";
import kaptureMerged from "../assets/kapture-merged.png";
import quebitz1 from "../assets/quebitz-1.png";
import quebitz2 from "../assets/quebitz-2.png";
import quebitz3 from "../assets/quebitz-3.png";
import quebitz4 from "../assets/quebitz-4.png";
import senseminderMerged from "../assets/senseminder-merged.jpg";

// Kapture Project Component
const KaptureProject = ({ project }: { project: any }) => {
  const handleGitHub = () => {
    window.open("https://github.com/imhamza32/Kapture", '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="group bg-dark-secondary rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 relative border border-orange-500/30 hover:border-orange-500">
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-transparent to-transparent z-10"></div>
        <div className="relative w-full h-full">
          {kaptureMerged && (
            <img
              src={kaptureMerged}
              alt={`${project.title} Screenshot`}
              className="absolute inset-0 w-full h-full object-contain bg-black/40"
            />
          )}
        </div>
        <div className="absolute top-4 left-4 z-20">
          <Badge className="bg-orange-600 hover:bg-orange-600/80 animate-pulse">
            {project.icon}
            <span className="ml-1 font-semibold">Photography</span>
          </Badge>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-sf-pro font-bold text-white group-hover:text-orange-500 transition-colors duration-300 mb-4">
          {project.title}
        </h3>
        <p className="text-gray-300 font-inter leading-relaxed mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string) => (
            <Badge key={tag} variant="outline" className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10">
              {tag}
            </Badge>
          ))}
        </div>
        <Button 
          onClick={handleGitHub}
          className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:opacity-90 transition-colors duration-300"
          data-testid="button-kapture-github"
        >
          <SiGithub className="mr-2 h-4 w-4" />
          View on GitHub
        </Button>
      </div>
    </div>
  );
};

// Animated QueBitz Project Component
const QueBitzProject = ({ project }: { project: any }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const quebitzImages = [
    quebitz1, quebitz2, quebitz3, quebitz4
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % quebitzImages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleVisitWebsite = () => {
    window.open(project.websiteUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="group bg-dark-secondary rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 relative border border-orange-500/30 hover:border-orange-500">
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-transparent to-transparent z-10"></div>
        <div className="relative w-full h-full">
          {quebitzImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title} Screenshot ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-contain bg-black/40 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="absolute top-4 left-4 z-20">
          <Badge className="bg-orange-500 hover:bg-orange-500/80 animate-pulse">
            {project.icon}
            <span className="ml-1 font-semibold">Logistics</span>
          </Badge>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-sf-pro font-bold text-white group-hover:text-orange-500 transition-colors duration-300 mb-4">
          {project.title}
        </h3>
        <p className="text-gray-300 font-inter leading-relaxed mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string) => (
            <Badge key={tag} variant="outline" className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10">
              {tag}
            </Badge>
          ))}
        </div>
        <Button 
          onClick={handleVisitWebsite}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 transition-colors duration-300"
          data-testid="button-quebitz-website"
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Visit Website
        </Button>
      </div>
    </div>
  );
};

import rapid1 from "../assets/rapid-1.webp";
import rapid2 from "../assets/rapid-2.webp";
import rapid3 from "../assets/rapid-3.webp";
import rapid4 from "../assets/rapid-4.webp";
import rapid5 from "../assets/rapid-5.webp";
import rapid6 from "../assets/rapid-6.webp";
import rapid7 from "../assets/rapid-7.webp";
import rapid8 from "../assets/rapid-8.webp";
import rapid9 from "../assets/rapid-9.webp";
import rapid10 from "../assets/rapid-10.webp";

// SenseMinder Project Component
const SenseMinderProject = ({ project }: { project: any }) => {
  const handleAppStore = () => {
    window.open(project.appStoreUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="group bg-dark-secondary rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 relative border border-emerald-500/30 hover:border-emerald-500">
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-transparent to-transparent z-10"></div>
        <div className="relative w-full h-full">
          {senseminderMerged && (
            <img
              src={senseminderMerged}
              alt={`${project.title} Screenshot`}
              className="absolute inset-0 w-full h-full object-contain bg-black/40"
            />
          )}
        </div>
        <div className="absolute top-4 left-4 z-20">
          <Badge className="bg-emerald-600 hover:bg-emerald-600/80 animate-pulse">
            {project.icon}
            <span className="ml-1 font-semibold">Security</span>
          </Badge>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-sf-pro font-bold text-white group-hover:text-emerald-500 transition-colors duration-300 mb-4">
          {project.title}
        </h3>
        <p className="text-gray-300 font-inter leading-relaxed mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string) => (
            <Badge key={tag} variant="outline" className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10">
              {tag}
            </Badge>
          ))}
        </div>
        <Button 
          onClick={handleAppStore}
          className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:opacity-90 transition-colors duration-300"
          data-testid="button-senseminder-appstore"
        >
          <Play className="mr-2 h-4 w-4" />
          App Store
        </Button>
      </div>
    </div>
  );
};

// RapidFunnel Project Component
const RapidFunnelProject = ({ project }: { project: any }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const rapidImages = [
    rapid1, rapid2, rapid3, rapid4, rapid5, rapid6, rapid7, rapid8, rapid9, rapid10
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % rapidImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleVisitWebsite = () => {
    window.open("https://rapidfunnel.com/", '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="group bg-dark-secondary rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 relative border border-blue-500/30 hover:border-blue-500">
      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-secondary via-transparent to-transparent z-10"></div>
        <div className="relative w-full h-full">
          {rapidImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title} Screenshot ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-contain bg-black/40 transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="absolute top-4 left-4 z-20">
          <Badge className="bg-blue-600 hover:bg-blue-600/80 animate-pulse">
            {project.icon}
            <span className="ml-1 font-semibold">Marketing</span>
          </Badge>
        </div>
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-sf-pro font-bold text-white group-hover:text-blue-500 transition-colors duration-300 mb-4">
          {project.title}
        </h3>
        <p className="text-gray-300 font-inter leading-relaxed mb-6">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string) => (
            <Badge key={tag} variant="outline" className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10">
              {tag}
            </Badge>
          ))}
        </div>
        <Button 
          onClick={handleVisitWebsite}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition-colors duration-300"
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          Visit Website
        </Button>
      </div>
    </div>
  );
};

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Social Boom",
      description: "Revolutionary digital business card platform that enables instant sharing of social profiles and contact information.",
      image: socialBoomImage,
      tags: ["SwiftUI", "Firebase", "Social"],
      color: "electric-blue",
      icon: <Users className="text-xl" />,
      gradient: "from-electric-blue to-cyan-bright",
      appStoreUrl: "https://apps.apple.com/nz/app/social-boom/id1587355589"
    },
    {
      id: 2,
      title: "Open Borders",
      description: "Immigration guidance app providing comprehensive resources and legal assistance for immigration matters.",
      image: openBordersiPhoneImage,
      tags: ["SwiftUI", "Legal", "Resources"],
      color: "purple-500",
      icon: <CheckCircle className="text-xl" />,
      gradient: "from-purple-500 to-pink-500",
      appStoreUrl: "https://apps.apple.com/us/app/open-borders/id123456789"
    },
    {
      id: 3,
      title: "QCard",
      description: "Digital business card solution with NFC technology, QR codes, and real-time contact sharing capabilities.",
      image: qCardImage,
      tags: ["SwiftUI", "NFC", "CoreData"],
      color: "green-500",
      icon: <Camera className="text-xl" />,
      gradient: "from-green-500 to-blue-500",
      appStoreUrl: "https://apps.apple.com/pk/app/qbuisness-card/id1592544809"
    },
    {
      id: 4,
      title: "Kameti",
      description: "Traditional savings group management app for Pakistani communities with secure money pooling and rotation features.",
      image: kametiImage,
      tags: ["Swift", "Security", "FinTech"],
      color: "orange-500",
      icon: <Users className="text-xl" />,
      gradient: "from-orange-500 to-red-500",
      appStoreUrl: "https://apps.apple.com/ca/app/kameti/id1553677575"
    },
    {
      id: 5,
      title: "Builbee",
      description: "Comprehensive real estate platform connecting buyers, sellers, and agents with advanced property search and management tools.",
      image: builbeeImage,
      tags: ["SwiftUI", "MapKit", "CoreLocation"],
      color: "blue-600",
      icon: <Users className="text-xl" />,
      gradient: "from-blue-600 to-cyan-500",
      appStoreUrl: "https://apps.apple.com/ca/app/builbee/id1573900197"
    },
    {
      id: 6,
      title: "Linkpod",
      description: "Seamless social media management platform that allows users to share and manage all their social profiles in one place.",
      image: linkpodImage,
      tags: ["SwiftUI", "Social", "Management"],
      color: "purple-600",
      icon: <Users className="text-xl" />,
      gradient: "from-purple-600 to-pink-600",
      appStoreUrl: "https://apps.apple.com/pk/app/linkpod/id1234567890"
    },
    {
      id: 7,
      title: "Kapture",
      description: "Creative social platform designed specifically for photographers to showcase their work and connect with the community.",
      image: kaptureMerged,
      tags: ["SwiftUI", "Photography", "Social"],
      color: "orange-600",
      icon: <Camera className="text-xl" />,
      gradient: "from-orange-600 to-red-600",
      appStoreUrl: "https://github.com/imhamza32/Kapture"
    },
    {
      id: 8,
      title: "QueBitz",
      description: "Livestock logistics platform combining scheduling, routing, compliance, and real-time traceability for commodity hauling with animal well-being and streamlined communication.",
      image: quebitz1,
      tags: ["Swift", "Logistics", "Real-time"],
      color: "orange-500",
      icon: <CheckCircle className="text-xl" />,
      gradient: "from-orange-500 to-red-500",
      appStoreUrl: "https://www.quebitz.com/",
      websiteUrl: "https://www.quebitz.com/"
    },
    {
      id: 9,
      title: "SenseMinder",
      description: "AI-powered personal security assistant designed to safeguard digital privacy through real-time vulnerability scanning, VPN protection, and Wi-Fi monitoring with an integrated AI chatbot.",
      image: senseminderMerged,
      tags: ["Swift", "AI", "Security"],
      color: "emerald-500",
      icon: <Shield className="text-xl" />,
      gradient: "from-emerald-600 to-cyan-600",
      appStoreUrl: "https://apps.apple.com/app/senseminder/id1234567890"
    },
    {
      id: 10,
      title: "RapidFunnel",
      description: "The #1 solution for network marketing and MLM, empowering teams with professional prospecting, communication, and training tools branded to their identity.",
      image: rapid1,
      tags: ["Swift", "Marketing", "SaaS"],
      color: "blue-500",
      icon: <Users className="text-xl" />,
      gradient: "from-blue-600 to-indigo-600",
      appStoreUrl: "https://rapidfunnel.com/"
    }
  ];

  const handleAppStore = (appStoreUrl: string) => {
    window.open(appStoreUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-dark-bg to-dark-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-sf-pro font-bold mb-6 gradient-text">Featured Apps</h2>
          <p className="text-xl text-gray-300 font-inter">Innovative iOS applications built with cutting-edge technology</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            project.title === "Kapture" ? (
              <KaptureProject key={project.id} project={project} />
            ) : project.title === "QueBitz" ? (
              <QueBitzProject key={project.id} project={project} />
            ) : project.title === "SenseMinder" ? (
              <SenseMinderProject key={project.id} project={project} />
            ) : project.title === "RapidFunnel" ? (
              <RapidFunnelProject key={project.id} project={project} />
            ) : (
            <div
              key={project.id}
              className="project-card group relative bg-dark-card rounded-3xl overflow-hidden border border-electric-blue/30 hover:border-electric-blue transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl hover:shadow-electric-blue/20"
              style={{ animationDelay: `${index * 0.2}s` }}
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative h-72 overflow-hidden bg-black/20">
                <img
                  src={project.image}
                  alt={`${project.title} App Interface`}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-60"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-sf-pro font-bold text-white group-hover:text-electric-blue transition-colors duration-300 mb-4">{project.title}</h3>
                
                <p className="text-gray-400 font-inter mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-electric-blue/50 text-electric-blue hover:bg-electric-blue/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Button
                  onClick={() => handleAppStore(project.appStoreUrl)}
                  className={`w-full bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white rounded-xl transition-all duration-300 font-inter font-semibold`}
                  data-testid={`button-appstore-${project.id}`}
                >
                  <Play className="mr-2 h-4 w-4" />
                  App Store
                </Button>
              </div>
            </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
