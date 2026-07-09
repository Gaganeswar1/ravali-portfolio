'use client';

import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    'IT Technical Recruitment',
    'Candidate Sourcing',
    'Candidate Screening',
    'Talent Acquisition',
    'Interview Coordination',
    'Rate Negotiation',
  ];

  const highlights = [
    { title: 'Experience', value: '1.5+ Years' },
    { title: 'Hiring', value: 'Full-Time & Contract' },
    { title: 'Education', value: 'MCA - Computer Science' },
    { title: 'Recruitment Tools', value: 'LinkedIn • Naukri' },
  ];

  return (
    <section id="about" style={{ background: 'transparent', color: '#fff' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '42px', marginBottom: '45px' }}>Who I Am</h2>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.25 } }}
          style={{
            background: 'rgba(15,23,42,.45)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid rgba(16,185,129,.15)',
            borderRadius: '22px',
            padding: '42px',
            boxShadow: '0 10px 35px rgba(0,0,0,.35)',
            transition: 'all .08s ease-out',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.border = '1px solid rgba(56,189,248,.45)';
            e.currentTarget.style.boxShadow =
              '0 0 35px rgba(56,189,248,.22),0 10px 35px rgba(0,0,0,.35)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.border = '1px solid rgba(16,185,129,.15)';
            e.currentTarget.style.boxShadow = '0 10px 35px rgba(0,0,0,.35)';
          }}
        >
          <h3
            style={{ color: '#10B981', margin: '0 0 18px', fontSize: '28px' }}
          >
            IT Technical Recruiter
          </h3>

          <p
            style={{
              color: '#CBD5E1',
              lineHeight: 1.9,
              fontSize: '17px',
              marginBottom: '34px',
            }}
          >
            I am an{' '}
            <span style={{ color: '#10B981', fontWeight: 700 }}>
              IT Technical Recruiter
            </span>{' '}
            with{' '}
            <span style={{ color: '#10B981', fontWeight: 700 }}>1.5 years</span>{' '}
            of experience in end-to-end recruitment, specializing in sourcing,
            screening, interview coordination, rate negotiation, and hiring for
            Full-Time, Contract, and C2H roles.
            <br />
            <br />
            I have hands-on experience using{' '}
            <span style={{ color: '#10B981', fontWeight: 700 }}>
              LinkedIn Recruiter, Naukri, Monster, and TechGig
            </span>{' '}
            to identify, engage, and recruit qualified candidates across various
            technologies. I work closely with Account Managers and hiring teams
            to understand client requirements and deliver quality talent within
            timelines.
            <br />
            <br />
            My expertise includes candidate sourcing, resume screening,
            interview coordination, stakeholder communication, vendor
            management, rate negotiation, and maintaining strong relationships
            with clients and candidates. I also possess foundational knowledge
            of Java, SQL, HTML, CSS, JavaScript, and Microsoft Office.
          </p>

          <h3 style={{ marginBottom: '20px', fontSize: '24px' }}>
            Core Expertise
          </h3>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '40px',
            }}
          >
            {skills.map((skill) => (
              <span
                key={skill}
                style={{
                  padding: '10px 16px',
                  borderRadius: '999px',
                  background: 'rgba(255,255,255,.05)',
                  border: '1px solid rgba(56,189,248,.12)',
                  color: '#E2E8F0',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                {skill}
              </span>
            ))}
          </div>

          <h3 style={{ marginBottom: '12px', fontSize: '24px' }}>Highlights</h3>

          <p
            style={{ color: '#94A3B8', marginBottom: '22px', lineHeight: 1.7 }}
          >
            A quick snapshot of my professional journey and recruitment expertise.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
              gap: '18px',
            }}
          >
            {highlights.map((item) => (
              <div
                key={item.title}
                style={{
                  background: 'rgba(255,255,255,.04)',
                  border: '1px solid rgba(56,189,248,.12)',
                  borderRadius: '16px',
                  padding: '22px',
                  textAlign: 'center',
                }}
              >
                <p style={{ color: '#94A3B8', fontSize: '14px', margin: 0 }}>
                  {item.title}
                </p>

                <h4
                  style={{
                    color: '#FFFFFF',
                    margin: '8px 0 0',
                    fontSize: '18px',
                  }}
                >
                  {item.value}
                </h4>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}