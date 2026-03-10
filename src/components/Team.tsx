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
    role: 'Community Lead',
    bio: 'Chris leads the Acne Community Engagement initiative, dedicated to creating a welcoming space where students can access reliable acne information and connect with the right support.',
    initials: 'CS',
    color: '#4f46e5',
    contact: '',
  },
  {
    name: 'Vinesh',
    role: 'Student Support Advisor',
    bio: 'Vinesh works directly with students to help them navigate their acne journey — from understanding their skin type to connecting them with appropriate medical and emotional resources.',
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
