export default function Hero() {
  return (
    <section className="hero">
      <nav>
        <h2>Kidrove</h2>

        <a href="#register">
          Enroll Now
        </a>
      </nav>

      <div className="hero-content">
        <div>
          <span className="badge">
            Summer Workshop 2026
          </span>

          <h1>
            AI & Robotics Summer Workshop
          </h1>

          <p>
            Explore the exciting world of Artificial Intelligence and Robotics.
            A fun 4-week online workshop where kids build creativity,
            coding skills, and problem-solving abilities through practical
            projects.
          </p>

          <a 
            href="#register" 
            className="primary-btn"
          >
            Enroll Now
          </a>
        </div>


        <div className="hero-card">
          <h3>Workshop Fee</h3>

          <strong>
            ₹2,999
          </strong>

          <p>
            Starting from <br />
            15 July 2026
          </p>
        </div>
      </div>
    </section>
  );
}