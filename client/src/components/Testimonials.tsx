import { Star } from "lucide-react";
import { SiLinkedin } from "react-icons/si";

export default function Testimonials() {
  const linkedinRecommendations = [
    {
      id: 1,
      name: "Jonathan Ginter",
      initials: "JG",
      title: "Agile Leader, Life Coach, Author, and Public Speaker",
      relationship: "Managed Munib directly",
      date: "August 2024",
      content: "Munib has been an excellent choice for our team. He is quick, collaborative, responsible, and takes initiative. We thought we had hired an intermediate developer but Munib rapidly demonstrated his Senior-level skills and maturity. We were lucky to have found him.",
      gradient: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-700"
    },
    {
      id: 2,
      name: "Boris Sivko",
      initials: "BS",
      title: "Software Engineer",
      relationship: "Managed Munib directly",
      date: "August 2024",
      content: "We worked together as one team with Munib for several months, and I recommend Munib as a software engineer who is an expert in the iOS area. It's not only about Objective-C; it's about platform management and all the details in general. Munib can work as a good collaborative team member, as well as a self-driven initiative person.",
      gradient: "from-emerald-600 to-teal-700",
      bgColor: "bg-emerald-700"
    },
    {
      id: 3,
      name: "Dzmitry Rubashka",
      initials: "DR",
      title: "Frontend Developer",
      relationship: "Worked on the same team",
      date: "August 2024",
      content: "Munib is a proactive and responsible team member who collaborates effectively while also excelling in independent tasks. His dedication to delivering high-quality work, commitment to the project's success, and ability to tackle complex challenges make him an invaluable asset to our team.",
      gradient: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-600"
    },
    {
      id: 4,
      name: "Artsiom Martynau",
      initials: "AM",
      title: "Senior Software Engineer",
      relationship: "Worked on the same team",
      date: "July 2024",
      content: "Munib is very proficient in programming, he caught on existing code quickly and managed to steadily improve it. Working with him is also comfortable as he tries to do in the best way possible and is not afraid of challenges.",
      gradient: "from-slate-600 to-slate-800",
      bgColor: "bg-slate-700"
    },
    {
      id: 5,
      name: "Muhammad Taimoor Hassan",
      initials: "MT",
      title: "iOS Developer",
      relationship: "Worked on the same team",
      date: "July 2024",
      content: "I work with Munib, he is best in logic building, coding and delivering the responsibilities. I really appreciate his abilities.",
      gradient: "from-amber-600 to-orange-700",
      bgColor: "bg-amber-700"
    },
    {
      id: 6,
      name: "Danilo Silva",
      initials: "DS",
      title: "iOS Developer at eDerm Systems",
      relationship: "Senior colleague",
      date: "March 2024",
      content: "I have worked with Munib for several months. He's a great developer, very dedicated and determined to get tasks completed as best as possible. Always eager to learn, and a fantastic team worker. And I can attest to his consolidated knowledge of Objective-C language.",
      gradient: "from-violet-600 to-purple-700",
      bgColor: "bg-violet-700"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-dark-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <SiLinkedin className="text-[#0A66C2] text-4xl" />
            <h2 className="text-5xl md:text-6xl font-sf-pro font-bold gradient-text">Recommendations</h2>
          </div>
          <p className="text-xl text-gray-300 font-inter">Professional recommendations from colleagues and managers</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {linkedinRecommendations.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-dark-card p-8 rounded-3xl border border-electric-blue/30 hover:border-electric-blue transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-electric-blue/10"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`testimonial-${testimonial.id}`}
            >
              <div className="flex items-start mb-6">
                <div className={`w-14 h-14 ${testimonial.bgColor} rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-lg`}>
                  <span className="text-white font-bold text-lg font-sf-pro">{testimonial.initials}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-sf-pro font-bold text-white text-lg">{testimonial.name}</h4>
                    <SiLinkedin className="text-[#0A66C2] text-sm" />
                  </div>
                  <p className="text-sm text-electric-blue font-inter">{testimonial.title}</p>
                  <p className="text-xs text-gray-500 font-inter mt-1">{testimonial.relationship} · {testimonial.date}</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 font-inter leading-relaxed text-sm">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
