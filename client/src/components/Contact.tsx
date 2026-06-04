import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Github, Linkedin, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: (data: typeof formData) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="text-xl" />,
      title: "Email",
      value: "hamzamunib32@gmail.com",
      link: "mailto:hamzamunib32@gmail.com"
    },
    {
      icon: <Linkedin className="text-xl" />,
      title: "LinkedIn",
      value: "linkedin.com/in/hamzamunib32",
      link: "https://linkedin.com/in/hamzamunib32"
    },
    {
      icon: <Github className="text-xl" />,
      title: "GitHub",
      value: "github.com/imhamza32",
      link: "https://github.com/imhamza32"
    }
  ];

  const services = [
    "iOS App Development",
    "SwiftUI Consulting",
    "AI/ML Integration",
    "Code Reviews"
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-dark-secondary to-dark-bg">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-sf-pro font-bold mb-6 gradient-text">Let's Connect</h2>
          <p className="text-xl text-gray-300 font-inter">Ready to discuss your next iOS project?</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col space-y-6">
            {/* Group top cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={info.title} className="flex items-center space-x-4 bg-dark-card p-5 rounded-2xl border border-electric-blue/20 hover:border-electric-blue/50 transition-all duration-300">
                  <div className="w-11 h-11 bg-gradient-to-br from-electric-blue to-cyan-bright rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-white scale-90">
                      {info.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sf-pro font-bold text-base text-white">{info.title}</h3>
                    <a 
                      href={info.link}
                      className="text-electric-blue text-sm font-inter hover:text-cyan-bright transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Available for section */}
            <div className="bg-[#1a1a1a] p-8 rounded-[2rem] border border-electric-blue/20 shadow-[0_0_30px_rgba(59,130,246,0.05)]">
              <h3 className="font-sf-pro font-bold text-xl text-white mb-6 text-left">
                Available for:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Full-Time iOS Engineering Roles", "White-Label Systems", "HealthTech & Data Compliance (HIPAA/GDPR)", "On-Site / Hybrid / Remote Collaboration"].map((service) => (
                  <div key={service} className="flex items-center bg-dark-bg/50 p-4 rounded-xl border border-electric-blue/10">
                    <CheckCircle className="text-electric-blue mr-3 h-4 w-4 flex-shrink-0" />
                    <span className="text-gray-300 text-sm font-inter">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-[#1a1a1a] p-8 rounded-[2rem] border border-electric-blue/20 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email on the same line */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="block text-white text-sm font-inter font-semibold mb-2">Name</Label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full h-11 px-4 bg-[#0a0a0a] border border-electric-blue/20 rounded-xl text-white font-inter focus:border-electric-blue transition-all"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <Label className="block text-white text-sm font-inter font-semibold mb-2">Email</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full h-11 px-4 bg-[#0a0a0a] border border-electric-blue/20 rounded-xl text-white font-inter focus:border-electric-blue transition-all"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              
              <div>
                <Label className="block text-white text-sm font-inter font-semibold mb-2">Project Details</Label>
                <Textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-electric-blue/20 rounded-xl text-white font-inter focus:border-electric-blue transition-all resize-none"
                  placeholder="How can I help with your project?"
                />
              </div>
              
              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="px-10 py-2.5 bg-electric-blue hover:bg-blue-600 text-white font-sf-pro font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                >
                  {contactMutation.isPending ? "Sending..." : "Send"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
