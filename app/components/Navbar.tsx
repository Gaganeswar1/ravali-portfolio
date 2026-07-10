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

      const checkpoint = window.scrollY + 140;
      let current = "home";

      sections.forEach((section) => {
        if (checkpoint >= section.offsetTop) {
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
      <nav className="premium-navbar">
        <a
          href="#home"
          className="navbar-logo"
          onClick={() => {
            setActive("home");
            setOpen(false);
          }}
        >
          RP<span>.</span>
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
              className={active === id ? "nav-link active" : "nav-link"}
            >
              {id}
            </a>
          ))}
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setOpen((previous) => !previous)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? "×" : "☰"}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-dropdown"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => {
                  setActive(id);
                  setOpen(false);
                }}
                className={
                  active === id
                    ? "mobile-nav-link active"
                    : "mobile-nav-link"
                }
              >
                {id}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}