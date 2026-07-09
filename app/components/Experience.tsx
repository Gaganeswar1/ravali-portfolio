'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  const experience = [
    {
      company: 'Persistence',
      role: 'IT Technical Recruiter',
      duration: 'Sep 2021 – Jan 2023',
      current: false,

      achievements: [
        'Managed end-to-end IT recruitment for Persistent Systems India, hiring for Full-Time, Contract, and C2H/C2C positions.',
        'Handled the complete recruitment lifecycle, including requirement analysis, candidate sourcing, resume screening, interviewing, rate negotiation, and offer closure.',
        'Sourced candidates using Naukri, LinkedIn Recruiter, Monster, and vendor networks.',
        'Collaborated with Account Managers and BDMs to understand client requirements and deliver suitable candidates within timelines.',
        'Screened and shortlisted candidate profiles based on technical skills, experience, and client requirements.',
        'Conducted candidate screening calls to assess technical skills, availability, compensation expectations, and interest in contract opportunities.',
        'Coordinated with employers and consultants for rate negotiations, rate confirmations, and profile submissions.',
        'Maintained recruitment databases, tracked submissions, interview schedules, and candidate pipelines.',
        'Built and maintained strong relationships with candidates, vendors, employers, and internal stakeholders.',
      ],

      tech: [
        'LinkedIn Recruiter',
        'Naukri',
        'Monster',
        'TechGig',
        'MS Office',
        'Excel',
      ],
    },
  ];

  return (
    <section
      id="experience"
      style={{
        background: 'transparent',
        color: '#fff',
        padding: '70px 20px',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '42px',
            marginBottom: '18px',
          }}
        >
          Experience
        </h2>

        <p
          style={{
            textAlign: 'center',
            color: '#94A3B8',
            fontSize: '18px',
            marginBottom: '70px',
          }}
        >
          Professional journey focused on IT recruitment, talent acquisition and candidate management.
        </p>

        <div
          style={{
            position: 'relative',
            paddingLeft: '45px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: '18px',
              top: 0,
              bottom: 0,
              width: '2px',
              background:
                'linear-gradient(to bottom,#10B981,rgba(56,189,248,.08))',
            }}
          />

          {experience.map((job, index) => (
            <motion.div
              key={job.role}
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.18,
                ease: 'easeOut',
              }}
              style={{
                position: 'relative',
                marginBottom: '55px',
              }}
            >
              <motion.div
                initial={{
                  scale: 0,
                }}
                whileInView={{
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 180,
                }}
                style={{
                  position: 'absolute',
                  left: '-36px',
                  top: '28px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: '#10B981',
                  boxShadow: '0 0 22px rgba(16,185,129,.85)',
                }}
              />

              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.01,
                  transition: {
                    duration: 0.25,
                  },
                }}
                style={{
                  background: 'rgba(15,23,42,.45)',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                  border: '1px solid rgba(16,185,129,.15)',
                  borderRadius: '22px',
                  padding: '35px',
                  boxShadow: '0 10px 35px rgba(0,0,0,.35)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '18px',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: '28px',
                        color: '#10B981',
                      }}
                    >
                      {job.role}
                    </h3>

                    <p
                      style={{
                        marginTop: '8px',
                        color: '#CBD5E1',
                        fontSize: '17px',
                      }}
                    >
                      {job.company}
                    </p>
                  </div>

                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '36px',
                      padding: '0 16px',
                      borderRadius: '999px',
                      background: job.current
                        ? 'rgba(34,197,94,.15)'
                        : 'rgba(148,163,184,.15)',
                      color: job.current ? '#22C55E' : '#CBD5E1',
                      fontWeight: 600,
                      fontSize: '13px',
                      lineHeight: 1,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {job.duration}
                  </span>
                </div>

                <div
                  style={{
                    marginTop: '30px',
                  }}
                >
                  <h4
                    style={{
                      color: '#FFFFFF',
                      marginBottom: '18px',
                    }}
                  >
                    Key Responsibilities
                  </h4>

                  <ul
                    style={{
                      paddingLeft: '22px',
                      color: '#CBD5E1',
                      lineHeight: 1.9,
                    }}
                  >
                    {job.achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <h4
                    style={{
                      marginTop: '28px',
                      marginBottom: '16px',
                    }}
                  >
                    Tools & Skills
                  </h4>

                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '12px',
                    }}
                  >
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        style={{
                          padding: '10px 18px',
                          borderRadius: '999px',
                          background: 'rgba(255,255,255,.05)',
                          border: '1px solid rgba(56,189,248,.12)',
                          color: '#E2E8F0',
                          fontSize: '14px',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}