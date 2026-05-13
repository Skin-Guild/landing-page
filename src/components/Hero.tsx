const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">Healthy Skin Project</div>
          <h1 className="hero-title">
            Your skin<br />has questions about acne.
          </h1>
          <p className="hero-subtitle">
            <em style={{ color: '#d9601a', fontStyle: 'italic', fontWeight: 700 }}>
              We have answers.
            </em>
            <br /><br />
            A community for students to learn about acne, meet our
            team, and find the support they need.
          </p>
          <div className="hero-actions">
            <a href="#resources" className="btn btn-primary">
              Get Support
            </a>
            <a href="#about-acne" className="btn btn-secondary">
              Learn More
            </a>
            <a
              href="/acne_education.pdf"
              download="Acne_Education_Healthy_Skin_Project.pdf"
              className="btn btn-secondary"
            >
              Download Slides
            </a>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-circle hero-circle-1" />
        <div className="hero-circle hero-circle-2" />
      </div>
    </section>
  )
}

export default Hero
