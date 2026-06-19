import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of 10-year-old",
    text: "My son absolutely loved the workshop! The instructors were very patient and the hands-on robotics projects kept him engaged the entire 4 weeks.",
    rating: 5,
  },
  {
    name: "Amit Desai",
    role: "Parent of 13-year-old",
    text: "A fantastic introduction to AI. My daughter built her first AI model and hasn't stopped talking about it since. Highly recommended!",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    role: "Parent of 9-year-old",
    text: "The perfect summer activity. It balances fun with serious learning. The curriculum is perfectly tailored for kids to easily grasp complex concepts.",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            What Parents Say
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Join hundreds of happy parents who invested in their child's future.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="bg-slate-50 p-8 rounded-3xl relative animate-slide-up hover:-translate-y-1 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-kidrove-primary/10" />
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "{item.text}"
              </p>
              <div>
                <h4 className="font-bold text-slate-900">{item.name}</h4>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
