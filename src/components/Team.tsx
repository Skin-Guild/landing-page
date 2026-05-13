interface TeamMember {
  name: string
  role: string
  bio: string
  color: string
  image?: string
}

const team: TeamMember[] = [
  {
    name: 'Chris Small',
    role: 'Co-Presenter',
    bio: 'Chris developed a passion for skin health after navigating acne firsthand, an experience that shaped his understanding of how isolating and confusing it can be without the right information. Frustrated by the gap between what people encounter on social media and what dermatologists actually recommend, he co-presents the Healthy Skin Project to bring evidence-based skin health education directly into the community. Alongside the Healthy Skin Project, he is building Faculty of Skin, a venture focused on expanding access to skin health tools and resources',
    color: '#4f46e5',
    image: '/chris.jpg',
  },
  {
    name: 'Vinesh Rao',
    role: 'Co-Presenter',
    bio: 'Vinesh is a first-year medical student at the University of Alberta with a background in psychology and a strong interest in dermatology and skin health. His passion for learning about the skin is reflected through initiatives such as organizing a hands-on skin biopsy workshop for medical students and participating in ongoing dermatology research. Through The Healthy Skin Project, he hopes to make skin education more approachable, evidence-based, and engaging for the community.',
    color: '#0891b2',
    image: '/vin.jpg',
  },
]

const Team = () => {
  return (
    <section id="team" className="section team">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Who we are</span>
          <h2 className="section-title section-title-dark">Meet our team.</h2>
          <p className="section-subtitle" style={{ color: '#a09d99' }}>
            We are here to support you. 
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

export default Team
