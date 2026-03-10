interface AcneFact {
  icon: string
  title: string
  description: string
}

const facts: AcneFact[] = [
  {
    icon: '🧬',
    title: 'What Is Acne?',
    description:
      'Acne is a common skin condition that occurs when hair follicles become clogged with oil and dead skin cells. It affects people of all ages, but is especially prevalent during adolescence.',
  },
  {
    icon: '📊',
    title: 'How Common Is It?',
    description:
      'Acne affects up to 85% of people at some point in their lives. It is the most common skin condition worldwide, and you are far from alone in dealing with it.',
  },
  {
    icon: '🔍',
    title: 'Common Causes',
    description:
      'Acne can be triggered by hormonal changes, genetics, certain skincare products, diet, stress, and environmental factors. Understanding your triggers is a key step toward managing it.',
  },
  {
    icon: '💊',
    title: 'Treatment Options',
    description:
      'Effective treatments range from over-the-counter topicals (benzoyl peroxide, salicylic acid) to prescription medications and professional procedures. A dermatologist can recommend what is right for you.',
  },
  {
    icon: '🧠',
    title: 'Mental Health Matters',
    description:
      'Acne can significantly impact self-esteem and mental wellbeing. It is completely valid to feel frustrated or self-conscious — seeking emotional support is just as important as treating the skin.',
  },
  {
    icon: '🌟',
    title: 'Managing Expectations',
    description:
      'Most acne treatments take 4–8 weeks to show results. Consistency is key. Be patient with yourself and your skin — improvement is possible with the right plan.',
  },
]

export default function AboutAcne() {
  return (
    <section id="about-acne" className="section about-acne">
      <div className="container">
        <div className="section-header">
          <span className="section-label">The basics</span>
          <h2 className="section-title">Understanding Acne.</h2>
          <p className="section-subtitle">
            Knowledge is the first step. Here is what every student should know
            about acne.
          </p>
        </div>
        <div className="facts-grid">
          {facts.map((fact) => (
            <div key={fact.title} className="fact-card">
              <div className="fact-icon">{fact.icon}</div>
              <h3 className="fact-title">{fact.title}</h3>
              <p className="fact-description">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
