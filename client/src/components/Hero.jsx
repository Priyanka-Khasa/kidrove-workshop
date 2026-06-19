import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900">
      {/* Decorative background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-kidrove-primary/20 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-kidrove-accent/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '1.5s' }}></div>

      <nav className="relative z-10 max-w-6xl mx-auto px-6 py-6 flex justify-between items-center animate-fade-in">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-kidrove-primary to-kidrove-secondary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
            K
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-800">Kidrove</h2>
        </div>
        <a 
          href="#register"
          className="hidden sm:inline-flex bg-slate-900 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-slate-800 transition-all shadow-md hover:shadow-lg"
        >
          Enroll Now
        </a>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-kidrove-primary/10 text-kidrove-primary px-4 py-2 rounded-full text-sm font-bold mb-6 border border-kidrove-primary/20">
            <Sparkles className="w-4 h-4" />
            <span>Summer Workshop 2026</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1] tracking-tight">
            Unlock the Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-kidrove-primary to-kidrove-secondary">AI & Robotics</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
            A 4-week interactive online experience where young minds (8-14 yrs) build creativity, coding skills, and craft real-world AI projects.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#register" 
              className="inline-flex items-center gap-2 bg-kidrove-accent hover:bg-yellow-500 text-white font-bold px-8 py-4 rounded-full text-lg transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
            >
              Secure Your Spot <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#details" 
              className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 font-bold px-8 py-4 rounded-full text-lg transition-all"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="glass-card p-10 rounded-3xl relative z-10">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-kidrove-accent rounded-full blur-[40px] opacity-50"></div>
            <h3 className="text-xl font-bold mb-2 text-slate-800">Complete Workshop</h3>
            <p className="text-sm text-slate-500 mb-6">4 weeks of live sessions & projects</p>
            
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-6xl font-black text-slate-900">₹2,999</span>
              <span className="text-lg text-slate-500 line-through">₹5,000</span>
            </div>

            <div className="space-y-4 mb-8">
              {['Live interactive classes', 'Hands-on robotics simulator', 'Certificate of completion'].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  {feature}
                </div>
              ))}
            </div>

            <p className="text-center text-sm font-semibold text-kidrove-primary bg-kidrove-primary/10 py-3 rounded-xl">
              Cohort starts on 15 July 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}