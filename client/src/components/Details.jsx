const details = [
  {
    title: "Age Group",
    value: "8–14 Years",
  },
  {
    title: "Duration",
    value: "4 Weeks",
  },
  {
    title: "Mode",
    value: "Online",
  },
  {
    title: "Fee",
    value: "₹2,999",
  },
  {
    title: "Start Date",
    value: "15 July 2026",
  },
];

export default function Details() {
  return (
    <section className="details section">
      <h2>Workshop Details</h2>

      <div className="grid">
        {details.map((item) => (
          <article className="card" key={item.title}>
            <p>{item.title}</p>
            <h3>{item.value}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}