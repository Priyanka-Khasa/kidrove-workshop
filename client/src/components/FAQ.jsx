import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do children need prior coding experience?",
    answer:
      "No. The workshop is extremely beginner-friendly and starts with the very basics of AI, robotics, and coding concepts before moving to advanced topics.",
  },
  {
    question: "How will the online workshop be conducted?",
    answer:
      "The workshop will be conducted through live, interactive online sessions with a 1-to-1 feel. Students will do practical activities and guided projects in real-time.",
  },
  {
    question: "Will students receive a certificate?",
    answer:
      "Absolutely. All students will receive a verified completion certificate after successfully finishing the workshop and submitting their final project.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-white relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Got Questions?
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Find answers to some of the most frequently asked questions below.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 animate-slide-up ${isOpen ? 'border-kidrove-primary bg-slate-50 shadow-md' : 'border-slate-200 bg-white hover:border-kidrove-primary/50'}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <button 
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-semibold text-slate-800 pr-4">{item.question}</span>
                  <ChevronDown className={`w-5 h-5 text-kidrove-primary transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="px-6 pb-5 text-slate-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}