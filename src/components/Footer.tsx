export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">Skin Guild</span>
            <p className="footer-tagline">
              Supporting students on their skin health journey.
            </p>
          </div>
          <nav className="footer-nav">
            <a href="#about-acne">About Acne</a>
            <a href="#team">Our Team</a>
            <a href="#resources">Resources</a>
            <a href="mailto:acne-support@facultyofskin.com">Contact Us</a>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Skin Guild · Acne Community
            Engagement. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
