export default function Footer() {
  return (
    <footer className="premium-footer">
      <div className="footer-container">
        <a href="#home" className="footer-logo">
          RP<span>.</span>
        </a>

        <p className="footer-tagline">
          IT Technical Recruitment • Talent Acquisition • Candidate Sourcing • Hiring
        </p>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Ravali Pala. All rights reserved.
          </span>

          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}