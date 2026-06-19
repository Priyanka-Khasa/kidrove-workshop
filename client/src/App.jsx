import "./index.css";

import Hero from "./components/Hero.jsx";
import Details from "./components/Details.jsx";
import Outcomes from "./components/Outcomes.jsx";
import FAQ from "./components/FAQ.jsx";
import RegistrationForm from "./components/RegisterForm.jsx";

export default function App() {
  return (
    <main>
      <Hero />
      <Details />
      <Outcomes />
      <FAQ />
      <RegistrationForm />
    </main>
  );
}