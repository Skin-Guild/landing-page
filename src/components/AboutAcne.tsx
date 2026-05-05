interface AcneFact {
  title: string
  description: string
}

const facts: AcneFact[] = [
  {
    title: 'Not All Breakouts Are the Same',
    description:
      'Non-inflammatory acne (whiteheads and blackheads) are pores clogged with dead skin and oil. Inflammatory acne (papules, pustules, nodules, and cysts) happens when your immune system fights back against bacteria in those clogged pores. Nodules and cysts are the most severe and sit deep under the skin.',
  },
  {
    title: "What's Behind the Breakouts",
    description:
      'Three things drive acne: (1) dead skin cells clog pores, forming a tiny plug called a microcomedo; (2) excess oil (sebum), triggered by hormones and genetics, mixes with dead skin and feeds acne-causing bacteria; (3) C. acnes bacteria multiply in clogged pores, causing redness and swelling, the inflamed pimples you see.',
  },
  {
    title: 'Some Marks Outlast the Breakout',
    description:
      'Acne can leave rolling, boxcar, ice-pick, or hypertrophic scars. The best prevention: treat early, never pick or pop, and stop touching your acne. Once scarring forms, it is much harder to reverse.',
  },
  {
    title: 'Things the Internet Got Wrong',
    description:
      'Washing more does not clear skin — over-washing strips your barrier and triggers more oil. Drying out acne backfires too, since dry skin ramps up oil production. Acne is not caused by dirty skin; scrubbing harder makes things worse. And toothpaste spot treatments? Just an irritant.',
  },
  {
    title: 'Five Things You Can Do Now',
    description:
      '1. Cleanse gently twice a day, no scrubbing. 2. Wash pillowcases and sheets often. 3. Try over-the-counter products with benzoyl peroxide or salicylic acid. 4. Use oil-free, non-comedogenic products if you wear makeup. 5. Apply sunscreen daily, as acne treatments make skin more sensitive to UV rays.',
  },
  {
    title: "It's Not Just Your Skin",
    description:
      'Acne affects confidence, social life, and mental health in ways that are real and significant, not dramatic, not vain. Seeking help is not vanity. It is self-care. You do not have to tough it out.',
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
            We are not doctors and we will not diagnose you. What we will do:
            give you accurate info, help you know when to get real help, and
            point you away from bad advice online.
          </p>
        </div>
        <div className="facts-grid">
          {facts.map((fact) => (
            <div key={fact.title} className="fact-card">
              <h3 className="fact-title">{fact.title}</h3>
              <p className="fact-description">{fact.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
