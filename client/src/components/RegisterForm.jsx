import { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "http://localhost:5000/api/enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );


      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message);
        return;
      }


      setMessage("Registration submitted successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
      });

    } catch (error) {

      setMessage(
        "Unable to submit enquiry. Please try again."
      );

    } finally {

      setLoading(false);

    }
  };


  return (
    <section 
      className="section register" 
      id="register"
    >

      <h2>
        Register Your Interest
      </h2>


      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Child / Parent Name"
          value={form.name}
          onChange={handleChange}
          required
        />


        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />


        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />


        <button disabled={loading}>
          {
            loading
              ? "Submitting..."
              : "Submit Enquiry"
          }
        </button>

      </form>


      {
        message && (
          <p className="message">
            {message}
          </p>
        )
      }

    </section>
  );
}