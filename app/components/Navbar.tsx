"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = ["home", "about", "skills", "experience", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = navItems
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      if (window.scrollY < 80) {
        setActive("home");
        return;
      }

      const checkPoint = window.scrollY + 120;
      let current = "home";

      sections.forEach((section) => {
        if (checkPoint >= section.offsetTop) {
          current = section.id;
        }
      });

      setActive(current);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection);
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <>
      <nav
        className="navbar"
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "98%",
          maxWidth: "2800px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "rgba(7,12,22,.72)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
          border: "1px solid rgba(255,255,255,.08)",
          borderRadius: "18px",
          boxShadow: "0 12px 40px rgba(0,0,0,.45)",
          zIndex: 1000,
        }}
      >
        <a
          href="#home"
          onClick={() => {
            setOpen(false);
            setActive("home");
          }}
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
          }}
        >
          <span style={{ fontSize: "30px", fontWeight: 800, color: "#fff" }}>
            RP
          </span>

          <span
            style={{
              fontSize: "34px",
              color: "#10B981",
              marginLeft: "2px",
              lineHeight: 1,
            }}
          >
            .
          </span>
        </a>

        <div className="nav-menu">
          {navItems.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => {
                setActive(id);
                setOpen(false);
              }}
              style={{
                color: active === id ? "#FFFFFF" : "#94A3B8",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: active === id ? 700 : 500,
                transition: ".25s",
                textShadow:
                  active === id
                    ? "0 0 40px rgba(16,185,129,1)"
                    : "none",
                filter:
                  active === id
                    ? "drop-shadow(0 0 16px rgba(16,185,129,1)"
                    : "none",
              }}
            >
              {id.toUpperCase()}
            </a>
          ))}
        </div>

        <button className="mobile-menu-btn" onClick={() => setOpen(!open)}>
          {open ? "×" : "☰"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-dropdown"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
          >
            {navItems.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => {
                  setActive(id);
                  setOpen(false);
                }}
                style={{
                  color: active === id ? "#10B981" : "#CBD5E1",
                  textDecoration: "none",
                  padding: "14px 10px",
                  fontWeight: active === id ? 700 : 500,
                  borderBottom: "1px solid rgba(255,255,255,.06)",
                }}
              >
                {id.toUpperCase()}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}