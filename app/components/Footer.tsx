export default function Footer() {
  return (
    <footer
      style={{
        background: 'transparent',
        color: '#94A3B8',
        padding: '45px 20px',
        borderTop: '1px solid rgba(56,189,248,.12)',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          style={{
            fontSize: '28px',
            fontWeight: 800,
            color: '#FFFFFF',
            letterSpacing: '-2px',
            marginBottom: '10px',
          }}
        >
          RG<span style={{ color: '#B03060' }}>.</span>
        </div>

        <p style={{ margin: '0 0 18px' }}>
          IT Technical Recruitment • Talent Acquisition • Candidate Sourcing • Hiring
        </p>

        <p style={{ margin: 0, fontSize: '14px' }}>
  © {new Date().getFullYear()} RAVALI PALA. Built with Next.js.
</p>
      </div>
    </footer>
  );
}