"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const responsibilities = [
    "Managed end-to-end IT recruitment for Persistent Systems India across Full-Time, Contract, C2H, and C2C positions.",
    "Handled requirement analysis, candidate sourcing, resume screening, interview coordination, rate negotiation, and offer closure.",
    "Sourced qualified candidates through LinkedIn Recruiter, Naukri, Monster, TechGig, and vendor networks.",
    "Collaborated with Account Managers and BDMs to understand client requirements and deliver relevant profiles within timelines.",
    "Conducted candidate screening calls to assess skills, availability, compensation expectations, and job interest.",
    "Coordinated with candidates, consultants, employers, and vendors for rate confirmation and profile submissions.",
    "Maintained recruitment databases, candidate pipelines, interview schedules, and submission reports.",
  ];

  const tools = [
    "LinkedIn Recruiter",
    "Naukri",
    "Monster",
    "TechGig",
    "MS Office",
    "Excel",
  ];

  return (
    <section id="experience" className="premium-section">
      <motion.div
        className="section-container"
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <div className="section-heading centered">
          <span>CAREER JOURNEY</span>
          <h2>Professional Experience</h2>
          <p>
            Experience in IT recruitment, candidate management, and stakeholder
            coordination.
          </p>
        </div>

        <div className="experience-wrapper">
          <div className="experience-line" />

          <motion.div
            className="experience-entry"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
          >
            <div className="experience-dot" />

            <div className="premium-card experience-card">
              <div className="experience-header">
                <div>
                  <span className="card-label">Professional Experience</span>
                  <h3>IT Technical Recruiter</h3>
                  <p className="company-name">Persistence</p>
                </div>

                <span className="experience-duration">
                  Sep 2021 – Jan 2023
                </span>
              </div>

              <div className="experience-content">
                <div>
                  <h4>Key Responsibilities</h4>

                  <ul className="responsibility-list">
                    {responsibilities.map((item) => (
                      <li key={item}>
                        <span />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience-sidebar">
                  <h4>Tools & Platforms</h4>

                  <div className="experience-tools">
                    {tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>

                  <div className="experience-focus">
                    <span>Primary Focus</span>
                    <h4>Talent Acquisition</h4>
                    <p>
                      Delivering qualified profiles while maintaining strong
                      candidate and stakeholder relationships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}