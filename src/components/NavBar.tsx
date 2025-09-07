import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`navbar ${menuOpen ? "is-open" : ""}`}>
      <div className="navbar__inner">
        <div className="nav-contact">
          <a
            href="tel:8656596974"
            className="nav-contact-text"
            style={{ display: "block", marginBottom: "4px" }}
          >
            Isaac Farr 865-659-6974
          </a>
          <a href="mailto:isaacgfarr@live.com" className="nav-contact-text">
            isaacgfarr@live.com
          </a>
        </div>
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            {menuOpen ? (
              <path
                d="M4 12h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>

        <nav id="primary-nav" className={`nav ${menuOpen ? "is-open" : ""}`}>
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className="nav__link"
          >
            My DENSO History
          </NavLink>
          <NavLink
            to="/skills"
            onClick={() => setMenuOpen(false)}
            className="nav__link"
          >
            Skills & Experience
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="nav__link"
          >
            Contact
          </NavLink>
          <NavLink
            to="/resume"
            onClick={() => setMenuOpen(false)}
            className="nav__link"
          >
            Download Resume
          </NavLink>
        </nav>
      </div>

      {/* Backdrop for mobile menu */}
      <div
        className={`nav-backdrop ${menuOpen ? "is-visible" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </header>
  );
};

export default NavBar;
