interface Resource {
  category: string
  items: { label: string; description: string; action?: string; href?: string }[]
}

const resources: Resource[] = [
  {
    category: 'Who Do I See?',
    items: [
      {
        label: 'Mild acne (fewer than 15 papules and pustules)',
        description:
          'Try over-the-counter cleansers, serums, or moisturizers. A pharmacist can point you in the right direction. You can also ask your family doctor for advice.',
      },
      {
        label: 'Moderate or severe acne (15+ papules/pustules, or nodules/cysts)',
        description:
          'Consider speaking to your family doctor or a dermatologist. Not sure what to say? Try: "I\'ve had acne for a while, I\'ve tried over-the-counter products and they haven\'t helped. Can we talk about treatment options?"',
      },
    ],
  },
  {
    category: 'Learn More',
    items: [
      {
        label: 'Acne and Rosacea Society of Canada',
        description:
          'Canadian-focused resources on acne and rosacea, including treatment options, patient support, and education from Canadian dermatologists.',
        action: 'Visit resource',
        href: 'https://www.acneaction.ca/',
      },
      {
        label: 'Canadian Skin Patient Alliance',
        description:
          'A national non-profit supporting Canadians living with skin conditions through advocacy, education, and community resources.',
        action: 'Visit resource',
        href: 'https://www.canadianskin.ca/en/',
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
