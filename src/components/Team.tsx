interface TeamMember {
  name: string
  role: string
  bio: string
  initials: string
  color: string
  contact?: string
}

const team: TeamMember[] = [
  {
    name: 'Chris Small',
    role: 'Some kind of role that will be important',
    bio: 'Bio coming soon.',
    initials: 'CS',
    color: '#4f46e5',
    contact: '',
  },
  {
    name: 'Vinesh',
    role: 'Some kind of role that will also be important',
    bio: 'Bio coming soon.',
    initials: 'V',
    color: '#0891b2',
    contact: '',
  },
]

export default function Team() {
  return (
    <section id="team" className="section team">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Who we are</span>
          <h2 className="section-title section-title-dark">Meet our team.</h2>
          <p className="section-subtitle" style={{ color: '#a09d99' }}>
            We are here to support you. Do not hesitate to reach out.
          </p>
        </div>
        <div className="team-grid">
          {team.map((member) => (
            <div key={member.name} className="team-card">
              <div className="team-avatar">
                {member.initials}
              </div>
              <h3 className="team-name">{member.name}</h3>
              <span className="team-role">{member.role}</span>
              <p className="team-bio">{member.bio}</p>
              {member.contact && (
                <a href={`mailto:${member.contact}`} className="team-contact">
                  Contact {member.name.split(' ')[0]}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
