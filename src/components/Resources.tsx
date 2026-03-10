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
      },
    ],
  },
  {
    category: 'Learn More',
    icon: '📚',
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
