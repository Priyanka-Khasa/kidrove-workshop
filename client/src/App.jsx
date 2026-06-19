import "./index.css";

import Hero from "./components/Hero.jsx";
import Details from "./components/Details.jsx";
import Outcomes from "./components/Outcomes.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FAQ from "./components/FAQ.jsx";
import RegistrationForm from "./components/RegistrationForm.jsx";

export default function App() {
  return (
    <main className="font-sans antialiased text-slate-900 bg-slate-50 min-h-screen">
      <Hero />
      <Details />
      <Outcomes />
      <Testimonials />
      <FAQ />
      <RegistrationForm />
      
      <footer className="bg-slate-900 text-slate-400 py-8 text-center">
        <p>© 2026 Kidrove. All rights reserved.</p>
      </footer>
    </main>
  );
}