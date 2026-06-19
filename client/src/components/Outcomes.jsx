import { Brain, Bot, Rocket, Code2, Sparkles } from "lucide-react";

const outcomes = [
  {
    text: "Understand Artificial Intelligence concepts with real-world examples",
    icon: Brain,
    color: "text-rose-500",
    bg: "bg-rose-100"
  },
  {
    text: "Learn robotics fundamentals including sensors and automation logic",
    icon: Bot,
    color: "text-blue-500",
    bg: "bg-blue-100"
  },
  {
    text: "Build interactive AI and robotics-based mini projects",
    icon: Rocket,
    color: "text-kidrove-accent",
    bg: "bg-orange-100"
  },
  {
    text: "Develop coding, creativity, and problem-solving skills",
    icon: Code2,
    color: "text-green-500",
    bg: "bg-green-100"
  },
  {
    text: "Explore future technologies through hands-on activities",
    icon: Sparkles,
    color: "text-purple-500",
    bg: "bg-purple-100"
  },
];

export default function Outcomes() {
  return (
    <section className="py-24 px-6 bg-slate-50 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Learning Outcomes
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">What your child will achieve by the end of this 4-week journey.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outcomes.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${item.bg} ${item.color}`}>
                  <Icon className="w-7 h-7" />
                </div>
                <p className="text-slate-700 font-medium leading-relaxed">
                  {item.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}