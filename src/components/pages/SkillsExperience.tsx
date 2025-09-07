import React from "react";

const SkillsExperience: React.FC = () => (
  <main className="page-content" aria-labelledby="skills-exp-title">
    {/* Page header */}
    <header className="section-header">
      <h1 id="skills-exp-title">Skills & Experience</h1>
      <p className="muted">
        A practical blend of software engineering and hands‑on
        manufacturing/quality work. I build, ship, and support real products —
        and I understand plant‑floor realities.
      </p>
    </header>

    {/* Quick summary / badges */}
    <section aria-label="Summary" className="section-block card summary">
      <div className="summary__grid">
        <div>
          <h2 className="eyebrow">Focus</h2>
          <p>
            Front‑end web & mobile app development with React.JS, React Native &
            TypeScript; indie game development; quality & process experience at
            DENSO.
          </p>
        </div>
        <div>
          <h2 className="eyebrow">Current</h2>
          <p>
            Quality Tech — DENSO (Plant 203, Dept. 414). Targeting interviews
            for engineering roles while contributing on the floor.
          </p>
        </div>
        <div>
          <h2 className="eyebrow">Education</h2>
          <p>
            B.S. Game Programming & Development (SNHU, 2023); A.S. General
            Studies (PSCC, 2021)
          </p>
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
            <li className="chip">Process documentation & quality records</li>
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
            Built mobile features with React Native and iOS tooling; partnered
            with UX, product, and QA.
          </li>
          <li>
            Worked in a collaborative code‑review culture using Git and
            iterative delivery.
          </li>
        </ul>
      </article>

      <article className="card exp">
        <header className="exp__header">
          <h3>Aerial Raider — Independent Project</h3>
          <span className="exp__meta">Mobile game (design → release)</span>
        </header>
        <ul className="exp__points">
          <li>
            Designed, developed, and shipped <em>Aerial Raider</em> for mobile.
          </li>
          <li>
            Learn more:{" "}
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
            Selected for PAC‑1 tech‑temp, treating alternator pole cores across
            an 11‑stage process.
          </li>
          <li>
            Performed titrations and formula‑based bath adjustments; operated
            crane, forklift & annealing furnaces; monitored endo‑gen; maintained
            production records.
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
            Mold swaps for plastic injection molding operations in high‑volume
            environments; fulfilled multi‑craft maintenance style tasks as
            needed.
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
            Returned via Randstad; supporting quality in a critical, post-FA
            inspection role.
          </li>
          <li>
            Goal: earn interviews for engineering roles and contribute both
            long‑term and immediately at DENSO.
          </li>
        </ul>
      </article>
    </section>

    {/* Education */}
    <section aria-label="Education and learning" className="section-block">
      <h2>Education & Learning</h2>
      <div className="grid-2">
        <article className="card">
          <h3>Degrees</h3>
          <ul>
            <li>
              <strong>B.S., Game Programming & Development</strong> — SNHU (Mar
              2022 – Dec 2023)
            </li>
            <li>
              <strong>A.S., General Studies</strong> — PSCC (Jan 2019 – Aug
              2021)
            </li>
          </ul>
          <p className="muted">
            Worked with C++, C#, Python, Unreal Engine, and design principles;
            created with Adobe Illustrator, Animate, Photoshop, and Premiere
            Pro. Graduated <strong>Summa Cum Laude</strong> from SNHU with a{" "}
            <strong>4.0 GPA.</strong>
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
              PLC fundamentals via{" "}
              <a
                className="ext-link"
                href="https://realpars.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                RealPars
              </a>
              ; manufacturing engineering with{" "}
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
        <a className="chip chip--action" href="/IFarrDensoResume.pdf" download>
          Download Résumé (PDF)
        </a>
      </div>
    </section>
  </main>
);

export default SkillsExperience;
