const faqs = [
  {
    question: "Do children need prior coding experience?",
    answer:
      "No. The workshop is beginner-friendly and starts with basic AI, robotics, and coding concepts.",
  },
  {
    question: "How will the online workshop be conducted?",
    answer:
      "The workshop will be conducted through interactive online sessions with practical activities and guided projects.",
  },
  {
    question: "Will students receive a certificate?",
    answer:
      "Yes. Students will receive a completion certificate after successfully finishing the workshop.",
  },
];

export default function FAQ() {
  return (
    <section className="section faq">
      <h2>Frequently Asked Questions</h2>

      {faqs.map((item) => (
        <details key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </section>
  );
}