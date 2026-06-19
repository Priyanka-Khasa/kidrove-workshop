import { UserCircle, CalendarDays, Laptop, Wallet, Rocket } from "lucide-react";

const details = [
  {
    title: "Age Group",
    value: "8–14 Years",
    icon: UserCircle,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    title: "Duration", 
    value: "4 Weeks",
    icon: CalendarDays,
    color: "text-kidrove-accent",
    bg: "bg-orange-50"
  },
  {
    title: "Mode",
    value: "Online",
    icon: Laptop,
    color: "text-purple-500",
    bg: "bg-purple-50"
  },
  {
    title: "Fee",
    value: "₹2,999",
    icon: Wallet,
    color: "text-green-500",
    bg: "bg-green-50"
  },
  {
    title: "Start Date",
    value: "15 July 2026",
    icon: Rocket,
    color: "text-kidrove-primary",
    bg: "bg-indigo-50"
  },
];

export default function WorkshopDetails() {
  return (
    <section id="details" className="py-24 px-6 bg-white relative z-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Workshop Details
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Everything you need to know about our upcoming summer cohort.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {details.map((item, index) => {
            const Icon = item.icon;
            return (
              <article 
                className="glass-card p-8 rounded-2xl text-center group hover:-translate-y-2 transition-all duration-300 animate-slide-up cursor-default" 
                key={item.title}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-3 ${item.bg} ${item.color}`}>
                  <Icon className="w-8 h-8" strokeWidth={2} />
                </div>
                <p className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wider">{item.title}</p>
                <h3 className="text-xl font-bold text-slate-800">{item.value}</h3>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  );
}