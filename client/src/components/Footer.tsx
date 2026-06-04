import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: <Linkedin className="text-2xl" />, href: "https://linkedin.com/in/hamzamunib32", label: "LinkedIn" },
    { icon: <Github className="text-2xl" />, href: "https://github.com/imhamza32", label: "GitHub" },
    { icon: <Twitter className="text-2xl" />, href: "https://twitter.com/imhamza32", label: "Twitter" },
    { icon: <Mail className="text-2xl" />, href: "mailto:hamzamunib32@gmail.com", label: "Email" },
  ];

  return (
    <footer className="py-12 px-6 bg-dark-bg border-t border-electric-blue/20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h3 className="font-sf-pro text-2xl font-bold gradient-text mb-4">iOS Engineer</h3>
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-electric-blue transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="text-gray-400 font-inter">
          <p>&copy; 2026 Munib Hamza. Engineered for Scale, Performance, and User Experience.</p>
        </div>
      </div>
    </footer>
  );
}
