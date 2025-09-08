import React, { useState } from "react";

const SkillsExperience: React.FC = () => {
  const [tab, setTab] = useState<"skills" | "projects">("skills");

  return (
    <main className="page-content" aria-labelledby="skills-exp-title">
      {/* Segmented control */}
      <div className="segmented" role="tablist" aria-label="View switcher">
        <button
          id="tab-skills"
          type="button"
          role="tab"
          aria-selected={tab === "skills"}
          aria-controls="panel-skills"
          className={`segmented__btn ${tab === "skills" ? "is-active" : ""}`}
          onClick={() => setTab("skills")}
        >
          Skills & Experience
        </button>
        <button
          id="tab-projects"
          type="button"
          role="tab"
          aria-selected={tab === "projects"}
          aria-controls="panel-projects"
          className={`segmented__btn ${tab === "projects" ? "is-active" : ""}`}
          onClick={() => setTab("projects")}
        >
          Project Links
        </button>
      </div>
      {/* Page header (changes per tab) */}
      <header className="section-header">
        <h1 id="skills-exp-title">
          {tab === "projects" ? "Project Links" : "Skills & Experience"}
        </h1>
        {tab === "skills" && (
          <p className="muted">
            A practical blend of software engineering and hands‑on
            manufacturing/quality work. I build, ship, and support real products
            — and I understand plant‑floor realities.
          </p>
        )}
      </header>

      {tab === "skills" ? (
        <div role="tabpanel" id="panel-skills" aria-labelledby="tab-skills">
          {/* Summary */}
          <section aria-label="Summary" className="section-block">
            <div className="section-block card summary">
              <div className="summary__grid">
                <div className="summary__cell">
                  <h2 className="eyebrow">Focus</h2>
                  <p>
                    Front‑end web & mobile app development with React.JS, React
                    Native & TypeScript; indie game development; quality &
                    process experience at DENSO.
                  </p>
                </div>
                <div className="summary__cell">
                  <h2 className="eyebrow">Current</h2>
                  <p>
                    Quality Tech — DENSO (Plant 203, Dept. 414). Targeting
                    interviews for engineering roles while contributing on the
                    floor.
                  </p>
                </div>
                <div className="summary__cell">
                  <h2 className="eyebrow">Education</h2>
                  <p>
                    B.S. Game Programming & Development (SNHU, 2023); A.S.
                    General Studies (PSCC, 2021)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section aria-label="Technical skills" className="section-block card">
            <h2>Technical Skills</h2>
            <div className="grid-2">
              <div>
                <h3>Languages</h3>
                <ul className="chiplist" role="list">
                  <li className="chip">JavaScript / TypeScript</li>
                  <li className="chip">Python</li>
                  <li className="chip">C#</li>
                  <li className="chip">C++</li>
                  <li className="chip">SQL (foundational)</li>
                </ul>
              </div>
              <div>
                <h3>Frameworks & Tools</h3>
                <ul className="chiplist" role="list">
                  <li className="chip">React (web)</li>
                  <li className="chip">React Native (mobile)</li>
                  <li className="chip">Unreal Engine</li>
                  <li className="chip">Git / GitHub</li>
                  <li className="chip">CI/CD (basic)</li>
                  <li className="chip">Microsoft Office</li>
                </ul>
              </div>
              <div>
                <h3>Design & Media</h3>
                <ul className="chiplist" role="list">
                  <li className="chip">Design Principles</li>
                  <li className="chip">Adobe Illustrator</li>
                  <li className="chip">Adobe Photoshop</li>
                  <li className="chip">Adobe Animate</li>
                  <li className="chip">Premiere Pro</li>
                  <li className="chip">Autodesk Maya</li>
                  <li className="chip">Solidworks</li>
                </ul>
              </div>
              <div>
                <h3>Manufacturing / Quality</h3>
                <ul className="chiplist" role="list">
                  <li className="chip">Chemical titrations & adjustments</li>
                  <li className="chip">Annealing furnace operations</li>
                  <li className="chip">Crane and forklift operation</li>
                  <li className="chip">
                    Process documentation & quality records
                  </li>
                  <li className="chip">Plastic injection press mold swaps</li>
                  <li className="chip">Visual inspections</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience sections */}
          <section aria-label="Experience" className="section-block">
            <h2>Experience</h2>

            {/* Software / Mobile */}
            <article className="card exp">
              <header className="exp__header">
                <h3>Ally Financial — Software/Mobile Engineer</h3>
                <span className="exp__meta">Jan 2022 – Jan 2025</span>
              </header>
              <ul className="exp__points">
                <li>
                  Built mobile features with React Native and iOS tooling;
                  partnered with UX, product, and QA.
                </li>
                <li>
                  Worked in a collaborative code‑review culture using Git and
                  iterative delivery.
                </li>
                <li>
                  Learn more: {""}
                  <a
                    className="ext-link"
                    href="https://apps.apple.com/us/app/ally-bank-auto-invest/id514374715"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iOS
                  </a>{" "}
                  |{" "}
                  <a
                    className="ext-link"
                    href="https://play.google.com/store/apps/details?id=com.ally.MobileBanking&hl=en_US"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Android
                  </a>
                </li>
              </ul>
            </article>

            <article className="card exp">
              <header className="exp__header">
                <h3>Aerial Raider — Independent Project</h3>
                <span className="exp__meta">
                  Mobile game (design → release)
                </span>
              </header>
              <ul className="exp__points">
                <li>
                  Designed, developed, and shipped <em>Aerial Raider</em> for
                  mobile.
                </li>
                <li>
                  Learn more: {""}
                  <a
                    className="ext-link"
                    href="https://apps.apple.com/us/app/aerial-raider/id6745239973"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iOS
                  </a>{" "}
                  |{" "}
                  <a
                    className="ext-link"
                    href="https://play.google.com/store/search?q=aerial%20raider&c=apps"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Android
                  </a>
                </li>
              </ul>
            </article>

            {/* Manufacturing / Quality */}
            <article className="card exp">
              <header className="exp__header">
                <h3>DENSO — Plant 102 (PAC‑1)</h3>
                <span className="exp__meta">2017</span>
              </header>
              <ul className="exp__points">
                <li>
                  Started via Staffing Solutions; promoted to line leader within
                  weeks.
                </li>
                <li>
                  Selected for PAC‑1 tech‑temp, treating alternator pole cores
                  across an 11‑stage process.
                </li>
                <li>
                  Performed titrations and formula‑based bath adjustments;
                  operated crane, forklift & annealing furnaces; monitored
                  endo‑gen; maintained production records.
                </li>
              </ul>
            </article>

            <article className="card exp">
              <header className="exp__header">
                <h3>Greenleaf Industries & Vaupell — Injection Molding</h3>
                <span className="exp__meta">2018 – 2022</span>
              </header>
              <ul className="exp__points">
                <li>
                  Mold swaps for plastic injection molding operations in
                  high‑volume environments; fulfilled multi‑craft maintenance
                  style tasks as needed.
                </li>
              </ul>
            </article>

            <article className="card exp">
              <header className="exp__header">
                <h3>DENSO — Quality Tech (Plant 203, Dept. 414)</h3>
                <span className="exp__meta">Aug 2025 – Present</span>
              </header>
              <ul className="exp__points">
                <li>
                  Returned via Randstad; supporting quality in a critical,
                  post-FA inspection role.
                </li>
                <li>
                  Goal: earn interviews for engineering roles and contribute
                  both long‑term and immediately at DENSO.
                </li>
              </ul>
            </article>
          </section>

          {/* Education */}
          <section
            aria-label="Education and learning"
            className="section-block"
          >
            <h2>Education & Learning</h2>
            <div className="grid-2">
              <article className="card">
                <h3>Degrees</h3>
                <ul>
                  <li>
                    <strong>B.S., Game Programming & Development</strong> — SNHU
                    (Mar 2022 – Dec 2023)
                  </li>
                  <li>
                    <strong>A.S., General Studies</strong> — PSCC (Jan 2019 –
                    Aug 2021)
                  </li>
                </ul>
                <p className="muted">
                  Worked with C++, C#, Python, Unreal Engine, and design
                  principles; created with Adobe Illustrator, Animate,
                  Photoshop, and Premiere Pro. Graduated{" "}
                  <strong>Summa Cum Laude</strong>
                  from SNHU with a <strong>4.0 GPA.</strong>
                </p>
              </article>
              <article className="card">
                <h3>Professional Study</h3>
                <ul>
                  <li>
                    <a
                      className="ext-link"
                      href="https://www.thinkful.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Thinkful
                    </a>{" "}
                    software engineering bootcamp (2021)
                  </li>
                  <li>
                    PLC fundamentals via {""}
                    <a
                      className="ext-link"
                      href="https://realpars.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      RealPars
                    </a>
                    ; manufacturing engineering with {""}
                    <a
                      className="ext-link"
                      href="https://www.toolingu.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tooling U‑SME
                    </a>
                  </li>
                </ul>
              </article>
            </div>
          </section>
        </div>
      ) : (
        /* Project Links */
        <section
          role="tabpanel"
          id="panel-projects"
          aria-labelledby="tab-projects"
          aria-label="Project links"
          className="section-block"
        >
          <h2>Websites</h2>
          <div className="grid-2">
            <article className="card">
              <h3>DensoHireMe.com (this site)</h3>
              <p>React + TypeScript, deployed on Vercel.</p>
              <p>
                <a
                  className="ext-link"
                  href="https://github.com/iGFarr/DensoHireMe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </p>
            </article>
          </div>
          <div className="grid-2">
            <article className="card">
              <h3>MaryvilleMassageWorks.com</h3>
              <p>
                React + TypeScript, deployed on Vercel for a friend who needed a
                webpage for their business.
              </p>
              <p>
                <a
                  className="ext-link"
                  href="https://maryvillemassageworks.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </p>
            </article>
          </div>

          <h2>Games</h2>
          <div className="grid-2">
            <article className="card">
              <h3>Aerial Raider (Mobile Game)</h3>
              <p>Indie arcade shooter built and shipped for iOS & Android.</p>
              <p>
                <a
                  className="ext-link"
                  href="https://apps.apple.com/us/app/aerial-raider/id6745239973"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  App Store
                </a>{" "}
                ·{" "}
                <a
                  className="ext-link"
                  href="https://play.google.com/store/search?q=aerial%20raider&c=apps"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Play
                </a>
              </p>
            </article>
            <article className="card">
              <h3>Tower Defense 3D Fusion (Windows)</h3>
              <p>
                3D tower defense game combining strategy and face paced gameplay
                with special hero mechanics.
              </p>
              <p>
                <a
                  className="ext-link"
                  href="https://store.steampowered.com/app/2634300/Tower_Defense_3D_Fusion/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Steam Store Page
                </a>
              </p>
            </article>
            <article className="card">
              <h3>Don't Play At Midnight! (Mac/Windows)</h3>
              <p>
                Horror-themed indie game with unique mechanics and atmosphere.
              </p>
              <p>
                <a
                  className="ext-link"
                  href="https://farroutstudio.itch.io/dontplayatmidnight"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Itch.io Page
                </a>
              </p>
            </article>
            <article className="card">
              <h3>Cube Buddy V2 (iOS app)</h3>
              <p>
                Unpublished project: Solve 2D flat map of a Rubik's cube, Time
                and record solve data, or play with a 3D cube (SwiftUI POC only,
                not fully functional)
              </p>
              <p>
                <a
                  className="ext-link"
                  href="https://github.com/iGFarr/CubeBuddyV2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </p>
            </article>
            <article className="card">
              <h3>Final Fantasy Text Game (Python script)</h3>
              <p>
                Unpublished text-based RPG inspired by classic Final Fantasy
                games.
              </p>
              <p>
                <a
                  className="ext-link"
                  href="https://github.com/iGFarr/Final-Fantasy-Text-Game"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </p>
            </article>
          </div>

          <h2>Media</h2>
          <div className="grid-2">
            <article className="media-card">
              <h3>Aerial Raider Trailer - (Premiere Pro Project)</h3>
              <div className="video-wrap">
                <iframe
                  src="https://www.youtube.com/embed/RoAUHTHi-RI"
                  title="Aerial Raider Trailer"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </article>

            <article className="card">
              <h3>Unreal Engine Developer Tools</h3>
              <p>
                27 custom tools and media assets for Unreal Engine development.
              </p>
              <p>
                <a
                  className="ext-link"
                  href="https://www.fab.com/sellers/Farr%20Out%20Studio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fab.com Seller Page
                </a>
              </p>
            </article>
          </div>
        </section>
      )}
      <hr />
      {/* Light CTA */}
      <section aria-label="Contact" className="section-block card callout">
        <h2 className="eyebrow">Next Steps</h2>
        <p className="muted">
          If you'd like to discuss how I can contribute at DENSO, I'm easy to
          reach.
        </p>
        <div className="chiprow">
          <a className="chip chip--action" href="tel:8656596974">
            Call 865‑659‑6974
          </a>
          <a className="chip chip--action" href="mailto:isaacgfarr@live.com">
            Email isaacgfarr@live.com
          </a>
          <a
            className="chip chip--action"
            href="/IFarrDensoResume.pdf"
            download
          >
            Download Résumé (PDF)
          </a>
        </div>
      </section>
    </main>
  );
};

export default SkillsExperience;
