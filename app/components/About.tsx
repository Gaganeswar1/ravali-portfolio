"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function About() {
  const expertise = [
    "IT Technical Recruitment",
    "Candidate Sourcing",
    "Candidate Screening",
    "Talent Acquisition",
    "Interview Coordination",
    "Rate Negotiation",
  ];

  const platforms = [
    "LinkedIn Recruiter",
    "Naukri",
    "Monster",
    "TechGig",
    "Vendor Networks",
  ];

  const strengths = [
    "Stakeholder Communication",
    "Candidate Relationship Management",
    "Vendor Coordination",
    "Requirement Analysis",
    "Profile Shortlisting",
    "Recruitment Pipeline Management",
  ];

  return (
    <section id="about" className="premium-section">
      <motion.div
        className="section-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
      >
        <motion.div
          className="section-heading centered"
          variants={itemVariants}
        >
          <span>ABOUT ME</span>

          <h2>Who I Am</h2>

          <p>
            A results-driven recruiter focused on connecting qualified
            professionals with the right career opportunities.
          </p>
        </motion.div>

        <div className="about-sequential-layout">
          <motion.div
            className="premium-card about-sequential-card"
            variants={itemVariants}
            whileHover={{ y: -6 }}
          >
            <div className="about-card-number">01</div>

            <div className="about-card-content">
              <span className="card-label">Professional Summary</span>

              <h3>IT Technical Recruiter</h3>

              <p>
                I am an IT Technical Recruiter with 1.5 years of experience in
                end-to-end recruitment, including candidate sourcing,
                screening, interview coordination, rate negotiation, and offer
                closure.
              </p>

              <p>
                I have experience hiring for Full-Time, Contract, C2H, and C2C
                positions while working closely with Account Managers, BDMs,
                candidates, vendors, and employers.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="premium-card about-sequential-card"
            variants={itemVariants}
            whileHover={{ y: -6 }}
          >
            <div className="about-card-number">02</div>

            <div className="about-card-content">
              <span className="card-label">Recruitment Platforms</span>

              <h3>Tools I Work With</h3>

              <p>
                I use leading job portals and recruitment networks to identify,
                engage, and shortlist qualified candidates based on client
                requirements.
              </p>

              <div className="about-pill-list">
                {platforms.map((platform, index) => (
                  <motion.span
                    key={platform}
                    className="about-pill"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.07,
                    }}
                  >
                    {platform}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="premium-card about-sequential-card"
            variants={itemVariants}
            whileHover={{ y: -6 }}
          >
            <div className="about-card-number">03</div>

            <div className="about-card-content">
              <span className="card-label">Core Expertise</span>

              <h3>Recruitment Capabilities</h3>

              <p>
                My recruitment experience covers the complete hiring lifecycle,
                from understanding client requirements to coordinating
                interviews and closing candidates.
              </p>

              <div className="about-pill-list">
                {expertise.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="about-pill"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.07,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="premium-card about-sequential-card"
            variants={itemVariants}
            whileHover={{ y: -6 }}
          >
            <div className="about-card-number">04</div>

            <div className="about-card-content">
              <span className="card-label">Professional Strengths</span>

              <h3>How I Work</h3>

              <p>
                I focus on clear communication, timely follow-ups, organized
                candidate tracking, and maintaining strong relationships with
                candidates and stakeholders.
              </p>

              <div className="about-pill-list">
                {strengths.map((strength, index) => (
                  <motion.span
                    key={strength}
                    className="about-pill"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.07,
                    }}
                  >
                    {strength}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}