const outcomes = [
  "Understand Artificial Intelligence concepts with real-world examples",
  "Learn robotics fundamentals including sensors and automation logic",
  "Build interactive AI and robotics-based mini projects",
  "Develop coding, creativity, and problem-solving skills",
  "Explore future technologies through hands-on activities",
];

export default function Outcomes() {
  return (
    <section className="section outcomes">
      <h2>Learning Outcomes</h2>

      <ul>
        {outcomes.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}