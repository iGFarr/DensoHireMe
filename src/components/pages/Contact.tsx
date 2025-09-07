import React from "react";

const Contact: React.FC = () => (
  <main className="page-content">
    <h1>Contact</h1>
    <p>I’d love to connect. Please reach out:</p>
    <ul>
      <li>
        Email: <a href="mailto:you@yourdomain.com">you@yourdomain.com</a>
      </li>
      <li>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/your-handle"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/your-handle
        </a>
      </li>
      <li>
        GitHub:{" "}
        <a
          href="https://github.com/your-handle"
          target="_blank"
          rel="noreferrer"
        >
          github.com/your-handle
        </a>
      </li>
    </ul>
  </main>
);

export default Contact;
