'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    {
      name: 'IT Recruitment',
      logo: '👩‍💼',
    },
    {
      name: 'Candidate Sourcing',
      logo: '🔎',
    },
    {
      name: 'LinkedIn Recruiter',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    },
    {
      name: 'Naukri',
      logo: '💼',
    },
    {
      name: 'Interview Coordination',
      logo: '📅',
    },
    {
      name: 'Microsoft Office',
      logo: 'https://img.icons8.com/color/96/microsoft-office-2019.png',
    },
    {
      name: 'SQL',
      logo: 'https://img.icons8.com/fluency/96/database.png',
    },
  ];

  return (
    <section
      id="skills"
      style={{
        background: 'transparent',
        color: '#fff',
        padding: '70px 20px',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        style={{
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <h2 style={{ fontSize: '42px', marginBottom: '18px' }}>Skills</h2>

        <p style={{ color: '#94A3B8', fontSize: '18px', marginBottom: '45px' }}>
          Recruitment tools, technical knowledge and professional skills.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            gap: '28px',
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: 'easeOut',
              }}
              whileHover={{
                y: -6,
                scale: 1.01,
                transition: { duration: 0.25 },
              }}
              style={{
                background: 'rgba(15,23,42,.45)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid rgba(16,185,129,.15)',
                borderRadius: '22px',
                padding: '42px 30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                minHeight: '220px',
                transition: 'all .08s ease-out',
                boxShadow: '0 10px 35px rgba(0,0,0,.35)',
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
              {skill.logo.startsWith('http') ? (
                <img
                  src={skill.logo}
                  alt={skill.name}
                  style={{
                    width: '70px',
                    height: '70px',
                    objectFit: 'contain',
                  }}
                />
              ) : (
                <div style={{ fontSize: '58px' }}>{skill.logo}</div>
              )}

              <h3
                style={{
                  margin: 0,
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                }}
              >
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}