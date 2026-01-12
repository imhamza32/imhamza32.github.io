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
      value: "imhamza32@gmail.com",
      link: "mailto:imhamza32@gmail.com"
    },
    {
      icon: <Linkedin className="text-xl" />,
      title: "LinkedIn",
      value: "linkedin.com/in/munib-hamza",
      link: "https://linkedin.com/in/munib-hamza"
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
    <section id="contact" className="py-24 px-6 bg-gradient-to-b from-dark-secondary to-dark-bg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-sf-pro font-bold mb-6 gradient-text">Let's Connect</h2>
          <p className="text-xl text-gray-300 font-inter">Ready to discuss your next iOS project?</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            {/* Grid layout for contact details */}
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div key={info.title} className="flex items-center space-x-4 bg-dark-card p-6 rounded-2xl border border-electric-blue/20 hover:border-electric-blue/50 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-electric-blue to-cyan-bright rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-white">
                      {info.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-sf-pro font-bold text-lg text-white">{info.title}</h3>
                    <a 
                      href={info.link}
                      className="text-electric-blue font-inter hover:text-cyan-bright transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Eye-catching Available for section */}
            <div className="bg-gradient-to-br from-electric-blue/10 to-cyan-bright/10 p-8 rounded-3xl border border-electric-blue/30">
              <h3 className="font-sf-pro font-bold text-2xl text-white mb-6 text-center">
                <span className="gradient-text">Available for:</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {services.map((service) => (
                  <div key={service} className="flex items-center bg-dark-secondary/50 p-4 rounded-xl border border-electric-blue/20">
                    <CheckCircle className="text-electric-blue mr-3 h-5 w-5 flex-shrink-0" />
                    <span className="text-gray-300 font-inter">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-dark-card p-8 rounded-3xl border border-electric-blue/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email on the same line */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label className="block text-white font-inter font-semibold mb-3">Name</Label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 bg-dark-bg border border-electric-blue/30 rounded-xl text-white font-inter focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <Label className="block text-white font-inter font-semibold mb-3">Email</Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 bg-dark-bg border border-electric-blue/30 rounded-xl text-white font-inter focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <Label className="block text-white font-inter font-semibold mb-3">Project Details</Label>
                <Textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full px-4 py-3 bg-dark-bg border border-electric-blue/30 rounded-xl text-white font-inter focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your iOS project..."
                />
              </div>
              
              <div className="flex justify-center">
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="px-12 py-3 bg-gradient-to-r from-electric-blue to-cyan-bright hover:from-cyan-bright hover:to-blue-glow text-white font-sf-pro font-bold rounded-xl transition-all duration-300 transform hover:scale-105 animate-glow-pulse"
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
