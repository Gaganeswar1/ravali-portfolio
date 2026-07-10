"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Recruitment",
      description:
        "End-to-end recruitment capabilities across multiple hiring models.",
      skills: [
        "IT Technical Recruitment",
        "Candidate Sourcing",
        "Candidate Screening",
        "Talent Acquisition",
        "Interview Coordination",
        "Rate Negotiation",
      ],
    },
    {
      number: "02",
      title: "Recruitment Platforms",
      description:
        "Tools and portals used to source and engage qualified candidates.",
      skills: [
        "LinkedIn Recruiter",
        "Naukri",
        "Monster",
        "TechGig",
        "Vendor Networks",
      ],
    },
    {
      number: "03",
      title: "Technical Knowledge",
      description:
        "Foundational technical knowledge useful for screening IT profiles.",
      skills: ["Core Java", "C", "JavaScript", "HTML", "CSS", "SQL"],
    },
    {
      number: "04",
      title: "Professional Skills",
      description:
        "Interpersonal and organizational capabilities used in recruitment.",
      skills: [
        "Communication",
        "Problem Solving",
        "Relationship Building",
        "Teamwork",
        "Multi-tasking",
        "Microsoft Office",
      ],
    },
  ];

  return (
    <section id="skills" className="premium-section">
      <motion.div
        className="section-container"
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <div className="section-heading centered">
          <span>CAPABILITIES</span>
          <h2>Skills & Expertise</h2>
          <p>
            Recruitment expertise, sourcing platforms, and technical knowledge.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              className="premium-card skill-group-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -7 }}
            >
              <div className="skill-card-top">
                <span>{group.number}</span>
                <div className="skill-card-line" />
              </div>

              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <div key={skill} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}