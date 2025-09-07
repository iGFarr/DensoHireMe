import React from "react";

const DownloadResume: React.FC = () => (
  <main className="page-content">
    <h1>Download Resume</h1>
    <p>You can grab a PDF copy of my resume below.</p>
    <a className="download-btn" href="/IFarrDensoResume.pdf" download>
      Download PDF
    </a>
    <p className="muted mt-1">
      Place <code>resume.pdf</code> in your project’s <code>public/</code>{" "}
      folder.
    </p>
  </main>
);

export default DownloadResume;
