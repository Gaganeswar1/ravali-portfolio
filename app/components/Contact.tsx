'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  const contacts = [
    {
      label: 'Email',
      value: 'palaravali4663@gmail.com',
      href: 'mailto:palaravali4663@gmail.com',
      icon: 'https://img.icons8.com/fluency/48/new-post.png',
    },
    {
      label: 'Phone',
      value: '+91 7013038653',
      href: 'tel:+917013038653',
      icon: 'https://img.icons8.com/fluency/48/phone.png',
    },
    {
      label: 'LinkedIn',
      value: 'View Profile →',
      href: 'https://linkedin.com/in/ravali-pala-0bb781211',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    },
  ];

  return (
    <section id="contact" style={{ background: 'transparent', color: 'white' }}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ maxWidth: '1050px', margin: '0 auto' }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '42px',
            marginBottom: '15px',
          }}
        >
          Let&apos;s Connect
        </h2>

        <p
          style={{
            textAlign: 'center',
            color: '#94A3B8',
            fontSize: '18px',
            marginBottom: '60px',
          }}
        >
          Open to IT Technical Recruitment, Talent Acquisition & HR Recruitment roles.
        </p>

        <motion.div
          whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.25 } }}
          style={{
            background: 'rgba(15,23,42,.45)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
            border: '1px solid rgba(56,189,248,.15)',
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
            e.currentTarget.style.border = '1px solid rgba(56,189,248,.15)';
            e.currentTarget.style.boxShadow = '0 10px 35px rgba(0,0,0,.35)';
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
              gap: '28px',
            }}
          >
            {contacts.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === 'LinkedIn' ? '_blank' : undefined}
                rel={
                  item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined
                }
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -4 }}
                style={{
                  textDecoration: 'none',
                  background: 'rgba(255,255,255,.04)',
                  border: '1px solid rgba(56,189,248,.12)',
                  borderRadius: '16px',
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  transition: '.3s',
                }}
              >
                <img src={item.icon} width="32" height="32" alt={item.label} />

                <div>
                  <div
                    style={{
                      color: '#94A3B8',
                      fontSize: '14px',
                      marginBottom: '6px',
                    }}
                  >
                    {item.label}
                  </div>

                  <div
                    style={{
                      color: '#E2E8F0',
                      fontSize: '16px',
                      fontWeight: 600,
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div
            style={{
              marginTop: '38px',
              paddingTop: '28px',
              borderTop: '1px solid rgba(255,255,255,.08)',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <a
              href="/Ravali_resume.pdf"
              target="_blank"
              style={{
                background: 'linear-gradient(135deg,#38BDF8,#2563EB)',
                color: '#050816',
                textDecoration: 'none',
                padding: '14px 30px',
                borderRadius: '12px',
                fontWeight: 700,
                boxShadow: '0 8px 22px rgba(56,189,248,.22)',
              }}
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}