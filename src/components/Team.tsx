interface TeamMember {
  name: string
  role: string
  bio: string
  initials: string
  color: string
  image?: string
}

const team: TeamMember[] = [
  {
    name: 'Chris Small',
    role: 'Co-Presenter',
    bio: 'Bio coming soon.',
    initials: 'CS',
    color: '#4f46e5',
    image: '/chris.jpg',
  },
  {
    name: 'Vinesh Rao',
    role: 'Co-Presenter',
    bio: 'Bio coming soon.',
    initials: 'VR',
    color: '#0891b2',
    image: '/vin.jpg',
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
              <img src={member.image} alt={member.name} className="team-image"/>
              <h3 className="team-name">{member.name}</h3>
              <span className="team-role">{member.role}</span>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
