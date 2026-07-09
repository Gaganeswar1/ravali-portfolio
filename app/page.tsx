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
    { title: "1.5+", value: "Years Experience" },
    { title: "MCA", value: "Computer Science" },
    { title: "Full-Time", value: "Contract & C2H Hiring" },
  ];

  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          background:
          "radial-gradient(circle at 18% 22%, rgba(176,48,96,.12), transparent 45%)," +
          "radial-gradient(circle at 82% 78%, rgba(139,30,63,.10), transparent 45%)," +
          "#140A0F",
        }}
      />

      <motion.div
        style={{
          scaleX,
          transformOrigin: "0%",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg,#B03060,#059669)",
          zIndex: 99999,
        }}
      />

      <Navbar />

      <section
        id="home"
        style={{
          position: "relative",
          zIndex: 2,
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "95px 20px 40px",
          background: "transparent",
          color: "white",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: "900px",
            margin: "auto",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{
              color: "#8B1E3F",
              letterSpacing: "4px",
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "18px",
            }}
          >
            IT TECHNICAL RECRUITER
          </motion.p>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            style={{
              fontWeight: 800,
              margin: 0,
              color: "#FFFFFF",
              lineHeight: 1.05,
              textShadow: "0 0 18px rgba(16,185,129,.12)",
            }}
          >
            RAVALI PALA
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              marginTop: "30px",
              color: "#CBD5E1",
              lineHeight: 1.8,
            }}
          >
            Talent Acquisition • Candidate Sourcing • Technical Recruitment • Hiring
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52, duration: 0.6 }}
            style={{
              color: "#94A3B8",
              marginTop: "16px",
              fontSize: "17px",
            }}
          >
            1.5+ Years Experience | Full-Time • Contract • C2H Hiring
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.55 }}
            style={{
              marginTop: "45px",
              display: "flex",
              justifyContent: "center",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <motion.a
              href="/Ravali_resume.pdf"
              target="_blank"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: "linear-gradient(135deg,#8B1E3F,#B03060)",
                boxShadow: "0 8px 22px rgba(16,185,129,.12)",
                color: "#FFF",
                textDecoration: "none",
                padding: "14px 30px",
                borderRadius: "12px",
                fontWeight: 700,
              }}
            >
              Download Resume
            </motion.a>
            

            <motion.a
              href="#contact"
              whileHover={{ y: -3, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{
                textDecoration: "none",
                color: "#ffffff",
                padding: "14px 30px",
                borderRadius: "12px",
                background: "rgba(255,255,255,.05)",
                backdropFilter: "blur(18px)",
                border: "1px solid rgba(16,185,129,.18)",
              }}
            >
              Let&apos;s Connect
            </motion.a>
          </motion.div>

          <div className="hero-stats">
            {stats.map((item, index) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 0.85 + index * 0.15,
                  duration: 0.55,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6, scale: 1.03 }}
                style={{
                  minWidth: "190px",
                  padding: "22px",
                  background: "rgba(5,8,22,.65)",
                  backdropFilter: "blur(18px)",
                  WebkitBackdropFilter: "blur(18px)",
                  border: "1px solid rgba(16,185,129,.15)",
                  borderRadius: "16px",
                  boxShadow: "0 8px 25px rgba(0,0,0,.35)",
                }}
              >
                <h2 style={{ margin: 0, color: "#B03060", fontSize: "28px" }}>
                  {item.title}
                </h2>

                <p style={{ marginTop: "10px", color: "#CBD5E1" }}>
                  {item.value}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div style={{ position: "relative", zIndex: 2 }}>
        <About />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </>
  );
}