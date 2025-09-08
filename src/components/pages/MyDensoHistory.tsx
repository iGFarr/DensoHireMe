import React from "react";

const MyDensoHistory: React.FC = () => (
  <main className="page-content">
    <header className="section-header">
      <h1>My DENSO History</h1>
      <p className="muted">
        From my first day Crafting The Core in Plant 102 to my current role in
        Plant 203.
      </p>
    </header>

    <section aria-label="Career timeline" className="timeline">
      {/* 2017 */}
      <article className="tl-item">
        <div className="tl-marker" aria-hidden="true" />
        <div className="tl-card">
          <h2>Jan 2017</h2>
          <h3 className="tl-title">
            Plant 102 – PAC‑1 / Alternator Pole Cores (Tech Temp → Production
            Associate)
          </h3>
          <ul className="tl-points">
            <li>
              Joined DENSO via Staffing Solutions; first manufacturing role,
              initially in a simple role loading/unloading pole cores for the
              final wash process.
            </li>
            <li>
              Became line leader within ~2 weeks and earned forklift
              certification to manage bins and replenishment.
            </li>
            <li>
              Hand-picked by group leader for a tech temp role at{" "}
              <strong>PAC‑1</strong> — a highly technical, 11‑stage treatment
              process using chemical baths (e.g., calcium, phosphoric acid) and
              annealing furnaces powered by an endothermic generator.
            </li>
            <li>
              Performed <em>titrations</em> and bath adjustments using
              formula‑based replenishment; operated crane, two annealing
              furnaces, monitored endo‑gen, and completed detailed production
              paperwork.
            </li>
            <li>
              Routinely ran what was intended to be a two‑person process solo
              after training; converted to full‑time Production Associate and
              completed ~1 year total in Plant 102.
            </li>
          </ul>
        </div>
      </article>
      <hr></hr>

      {/* 2018–2024 */}
      <article className="tl-item">
        <div className="tl-marker" aria-hidden="true" />
        <div className="tl-card">
          <h2>2018 – 2024</h2>

          <h3 className="tl-title">Cross‑industry Manufacturing & Education</h3>
          <ul className="tl-points">
            <li>
              Warehouse & manufacturing roles; plastic injection press mold
              swapping experience at <strong>Vaupell</strong> (Seattle) and{" "}
              <strong>Greenleaf Industries</strong> (Lenoir City). At Greenleaf,
              supported high‑volume runs and filled multi‑craft maintenance
              style duties in between mold swaps.
            </li>
            <li>
              Completed <strong>Associate of Science (General Studies)</strong>{" "}
              at PSCC; self‑studied <strong>PLC fundamentals</strong> via{" "}
              <a
                className="ext-link"
                href="https://realpars.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                RealPars
              </a>{" "}
              (2019) and manufacturing engineering topics with{" "}
              <a
                className="ext-link"
                href="https://www.toolingu.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tooling U‑SME
              </a>
              .
            </li>
            <li>
              Entered{" "}
              <a
                className="ext-link"
                href="https://www.thinkful.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Thinkful</strong>
              </a>{" "}
              software engineering bootcamp (2021); transitioned to software
              engineering within 4 months.
            </li>
            <li>
              Started as a Software/Mobile Engineer at{" "}
              <strong>Ally Financial</strong> in Jan 2022; built React Native &
              iOS features for banking/invest products, working across UX,
              product, and CI/CD. Worked here until Jan 2025.
              <span className="resume-cite"> (See resume for details) </span>
            </li>
            <li>
              Completed a{" "}
              <strong>B.S. in Game Programming & Development</strong> at
              Southern New Hampshire University from March 2022 to December
              2023, gaining proficiency in C++, C#, Python, Unreal Engine, Adobe
              tools, design principles and much much more.
            </li>
          </ul>
        </div>
      </article>
      <hr></hr>

      {/* 2025 – Present */}
      <article className="tl-item">
        <div className="tl-marker" aria-hidden="true" />
        <div className="tl-card">
          <h2>Jan 2025 – Present</h2>
          <h3 className="tl-title">
            Quality Tech – Plant 203, Dept. 414 (Randstad)
          </h3>
          <ul className="tl-points">
            <li>
              Contract ended at Ally during budget‑driven reduction; focused on
              building/launching <em>Aerial Raider</em> for{" "}
              <a
                className="ext-link"
                href="https://apps.apple.com/us/app/aerial-raider/id6745239973"
                target="_blank"
                rel="noopener noreferrer"
              >
                iOS
              </a>{" "}
              and{" "}
              <a
                className="ext-link"
                href="https://play.google.com/store/search?q=aerial%20raider&c=apps"
                target="_blank"
                rel="noopener noreferrer"
              >
                Android
              </a>{" "}
              while seeking stable, community‑rooted work.
            </li>
            <li>
              Returned to DENSO in Aug 2025 via Randstad; placed as a{" "}
              <strong>Quality Tech</strong> given prior experience. Objective:
              contribute immediately while interviewing for engineering roles.
            </li>
            <li>
              Motivation: DENSO’s stability, culture of quality and
              craftsmanship, and impact on Maryville/Blount County.
            </li>
          </ul>
        </div>
      </article>
      <hr></hr>
      {/* Community connection */}
      <article className="tl-item tl-item--note">
        <div className="tl-marker" aria-hidden="true" />
        <div className="tl-card">
          <h3 className="tl-note">Community & Family Ties</h3>
          <p>
            Many of my family and friends have built careers at DENSO. I’ve seen
            firsthand how the company strengthens Maryville and the surrounding
            communities, and I’m committed to growing here long‑term.
          </p>
        </div>
      </article>
    </section>
    <div className="next-section">
      <a href="/skills" className="next-btn">
        View Skills & Experience →
      </a>
    </div>
  </main>
);

export default MyDensoHistory;
