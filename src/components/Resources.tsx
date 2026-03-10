interface Resource {
  category: string
  icon: string
  items: { label: string; description: string; action?: string; href?: string }[]
}

const resources: Resource[] = [
  {
    category: 'Talk to Us',
    icon: '💬',
    items: [
      {
        label: 'Ask a Question',
        description:
          'Have a question about acne or your skin? Reach out to our team directly and we will get back to you.',
        action: 'Send a message',
        href: 'mailto:acne-support@facultyofskin.com',
      },
    ],
  },
  {
    category: 'Learn More',
    icon: '📚',
    items: [
      {
        label: 'American Academy of Dermatology',
        description:
          'Trusted, evidence-based information on acne causes, types, and treatments from dermatology professionals.',
        action: 'Visit resource',
        href: 'https://www.aad.org/public/diseases/acne',
      },
      {
        label: 'NHS Acne Guide',
        description:
          'A comprehensive overview of acne, including self-care tips and when to seek medical advice.',
        action: 'Visit resource',
        href: 'https://www.nhs.uk/conditions/acne/',
      },
      {
        label: 'Skin Health Alliance',
        description:
          'Independent resources on skin conditions including acne, backed by dermatologists and healthcare professionals.',
        action: 'Visit resource',
        href: 'https://skinhealthalliance.org',
      },
    ],
  },
  {
    category: 'Mental Wellbeing',
    icon: '🤝',
    items: [
      {
        label: 'It is OK to struggle',
        description:
          'Acne can affect your confidence and mental health. If you are finding things tough, talking to a school counsellor or a trusted adult can help.',
      },
      {
        label: 'Student Wellbeing Services',
        description:
          'Your institution likely has wellbeing support available. We can help you find the right contact.',
        action: 'Get directed',
        href: 'mailto:acne-support@facultyofskin.com',
      },
    ],
  },
]

export default function Resources() {
  return (
    <section id="resources" className="section resources">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Next steps</span>
          <h2 className="section-title">Resources &amp; Support.</h2>
          <p className="section-subtitle">
            Everything you need to take the next step — whether that is
            information, a conversation, or professional help.
          </p>
        </div>
        <div className="resources-grid">
          {resources.map((resource) => (
            <div key={resource.category} className="resource-category">
              <div className="resource-category-header">
                <span className="resource-icon">{resource.icon}</span>
                <h3 className="resource-category-title">{resource.category}</h3>
              </div>
              <div className="resource-items">
                {resource.items.map((item) => (
                  <div key={item.label} className="resource-item">
                    <h4 className="resource-item-label">{item.label}</h4>
                    <p className="resource-item-description">
                      {item.description}
                    </p>
                    {item.action && item.href && (
                      <a
                        href={item.href}
                        className="resource-link"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.action} →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
