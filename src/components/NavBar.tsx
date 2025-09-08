import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import type { Theme } from "../App";

type NavBarProps = {
  theme: Theme;
  onToggleTheme: () => void;
};

const NavBar: React.FC<NavBarProps> = ({ theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`navbar ${menuOpen ? "is-open" : ""}`}>
      <div className="navbar__inner">
        {/* Left: contact */}
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

        {/* Push the following controls to the far right */}
        <div className="controls">
          {/* Theme toggle sits to the left of the hamburger on mobile; far right on desktop */}
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${
              theme === "dark" ? "light" : "dark"
            } theme`}
            aria-pressed={theme === "dark"}
            onClick={onToggleTheme}
          >
            {/* simple moon/sun glyph swap */}
            {theme === "dark" ? (
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                aria-hidden="true"
              >
                <path
                  d="M12 4V2m0 20v-2M4 12H2m20 0h-2M5.64 5.64L4.22 4.22m15.56 15.56-1.42-1.42M18.36 5.64l1.42-1.42M4.22 19.78l1.42-1.42"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="12" r="4" fill="currentColor" />
              </svg>
            )}
          </button>

          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="hamburger" aria-hidden="true">
              <span className="bar bar1" />
              <span className="bar bar2" />
              <span className="bar bar3" />
            </span>
          </button>
        </div>

        {/* Menu */}
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
          <a href="/IFarrDensoResume.pdf" download className="nav__link">
            Download Resume
          </a>
        </nav>
      </div>

      <div
        className={`nav-backdrop ${menuOpen ? "is-visible" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </header>
  );
};

export default NavBar;
