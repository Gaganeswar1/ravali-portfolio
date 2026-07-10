"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  const stats = [
    {
      title: "1.5+",
      value: "Years Experience",
    },
    {
      title: "MCA",
      value: "Computer Science",
    },
    {
      title: "Full-Time",
      value: "Contract & C2H Hiring",
    },
    {
      title: "4+",
      value: "Recruitment Platforms",
    },
  ];

  return (
    <>
      <div className="site-background" />
      <div className="background-glow background-glow-one" />
      <div className="background-glow background-glow-two" />

      <motion.div
        style={{
          scaleX,
          transformOrigin: "0%",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg,#14D8C4,#0EA5A4)",
          boxShadow: "0 0 18px rgba(20,216,196,.65)",
          zIndex: 99999,
        }}
      />

      <Navbar />

      <main>
        <section id="home" className="hero-section hero-section-centered">
          <motion.div
            className="hero-centered-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="hero-label hero-label-centered"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.55 }}
            >
              <div className="hero-label-line" />
              <span>IT TECHNICAL RECRUITER</span>
              <div className="hero-label-line" />
            </motion.div>

            <motion.h1
              className="hero-title hero-title-centered"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.65 }}
            >
              Hi, I&apos;m
              <span>Ravali Pala</span>
            </motion.h1>

            <motion.p
              className="hero-specialization hero-specialization-centered"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.6 }}
            >
              Talent Acquisition
              <span>•</span>
              Candidate Sourcing
              <span>•</span>
              Technical Recruitment
              <span>•</span>
              Hiring
            </motion.p>

            <motion.p
              className="hero-description hero-description-centered"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.46, duration: 0.6 }}
            >
              Results-driven IT Technical Recruiter with 1.5 years of experience
              in end-to-end recruitment for Full-Time, Contract, and C2H roles.
              Passionate about connecting qualified talent with the right career
              opportunities.
            </motion.p>

            <motion.div
              className="hero-buttons hero-buttons-centered"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.58, duration: 0.6 }}
            >
              <motion.a
                href="/Ravali_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button"
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Download Resume
              </motion.a>

              <motion.a
                href="#contact"
                className="secondary-button"
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Let&apos;s Connect
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-statistics"
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.65 }}
          >
            {stats.map((item, index) => (
              <motion.div
                key={`${item.title}-${item.value}`}
                className="stat-item"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.95 + index * 0.12,
                  duration: 0.5,
                }}
                whileHover={{ y: -7 }}
              >
                <h2>{item.title}</h2>
                <p>{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <div className="page-sections">
          <About />
          <Skills />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}