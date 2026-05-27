interface AcneFact {
  title: string
  description?: string
  items?: string[]
  ordered?: boolean
}

const facts: AcneFact[] = [
  {
    title: 'Not All Breakouts Are the Same',
    items: [
      'Whiteheads, pores clogged and closed, no visible opening. (no redness)',
      'Blackheads, pores open, debris exposed to air turns them black. (no redness)',
      'Papules, red bumps, typically 1 to 5 mm.',
      'Pustules, papules filled with white pus.',
      'Nodules and Cysts, deep, inflamed, hardened lesions. Cysts are deeper still, filled with pus and bloody fluid.',
    ],
  },
  {
    title: "What's Behind the Breakouts",
    description: 'Three things drive acne:',
    items: [
      'Dead skin cells clog pores, forming a tiny plug called a microcomedo. Exact cause unknown.',
      'Excess oil (sebum), triggered by hormones and genetics, mixes with dead skin and creates ideal conditions for acne-causing bacteria.',
      'C. acnes bacteria multiply in clogged pores to an unhealthy level. Your body reacts with redness and swelling, inflamed pimples.',
    ],
    ordered: true,
  },
  {
    title: 'Some Marks Outlast the Breakout',
    description: 'Scar types: rolling (broad, wave-like depressions), boxcar (wide pit with steep edges), ice pick (narrow, deep hole), hypertrophic (raised above the skin surface). To prevent scarring:',
    items: [
      'Treat early.',
      'Never pick, pop, or scratch.',
      'Stop touching your acne.',
    ],
  },
  {
    title: 'Things the Internet Got Wrong',
    items: [
      'Wash more for clear skin: Over-washing strips your barrier and triggers more oil.',
      'Dry it out: Skin needs moisture. Drying it causes more oil production.',
      'Acne is caused by dirty skin: Scrubbing harder strips your barrier and makes things worse.',
      'Toothpaste spot treatment: It\'s just an irritant.',
    ],
  },
  {
    title: 'Five Things You Can Do Now',
    items: [
      'Cleanse with a gentle cleanser twice a day, no scrubbing.',
      'Clean pillowcases and sheets often (helps prevent acne, not treat it).',
      'Try over-the-counter cleansers, creams, or gels with benzoyl peroxide or salicylic acid.',
      'Use oil-free, non-comedogenic products if you wear makeup.',
      'Apply sunscreen daily. Acne treatments make skin more sensitive to UV rays.',
    ],
    ordered: true,
  },
  {
    title: "It's Not Just Your Skin",
    description:
      'Acne affects confidence, social life, and mental health in ways that are real and significant — not dramatic, not vain. Seeking help is not vanity. It is self-care. You do not have to tough it out.',
  },
]

const AboutAcne = () => {
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
              {fact.description && (
                <p className="fact-description">{fact.description}</p>
              )}
              {fact.items && (
                fact.ordered
                  ? <ol className="fact-list">{fact.items.map((item) => <li key={item}>{item}</li>)}</ol>
                  : <ul className="fact-list">{fact.items.map((item) => <li key={item}>{item}</li>)}</ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutAcne
