"use client";

import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "palaravali4663@gmail.com",
      href: "mailto:palaravali4663@gmail.com",
      icon: "✉",
    },
    {
      label: "Phone",
      value: "+91 7013038653",
      href: "tel:+917013038653",
      icon: "☎",
    },
    {
      label: "LinkedIn",
      value: "View Professional Profile",
      href: "https://linkedin.com/in/ravali-pala-0bb781211",
      icon: "in",
    },
  ];

  return (
    <section id="contact" className="premium-section">
      <motion.div
        className="section-container"
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <div className="section-heading centered">
          <span>GET IN TOUCH</span>
          <h2>Let&apos;s Connect</h2>
          <p>
            Open to IT Technical Recruitment, Talent Acquisition, and HR
            Recruitment opportunities.
          </p>
        </div>

        <div className="contact-layout">
          <motion.div
            className="premium-card contact-intro-card"
            whileHover={{ y: -6 }}
          >
            <span className="card-label">Available for Opportunities</span>

            <h3>Let&apos;s build meaningful professional connections.</h3>

            <p>
              Feel free to contact me regarding IT recruitment, talent
              acquisition, contract hiring, or relevant professional
              opportunities.
            </p>

            <a
              href="/Ravali_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              Download Resume
            </a>
          </motion.div>

          <div className="contact-options">
            {contacts.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label === "LinkedIn" ? "_blank" : undefined}
                rel={
                  item.label === "LinkedIn"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="contact-option-card"
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                }}
                whileHover={{ x: 6 }}
              >
                <div className="contact-icon">{item.icon}</div>

                <div>
                  <span>{item.label}</span>
                  <h4>{item.value}</h4>
                </div>

                <div className="contact-arrow">→</div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}