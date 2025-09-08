import React from "react";

const Contact: React.FC = () => (
  <main className="page-content">
    <h1>Contact</h1>
    <p>
      I’m open to connecting about opportunities at DENSO. Please feel free to
      reach out through any of the following:
    </p>
    <ul>
      <li>
        <strong>Email:</strong>{" "}
        <a href="mailto:isaacgfarr@live.com">isaacgfarr@live.com</a>
      </li>
      <li>
        <strong>Phone:</strong> <a href="tel:865-659-6974">865-659-6974</a>
      </li>
      <li>
        <strong>LinkedIn:</strong>{" "}
        <a
          href="https://www.linkedin.com/in/juniordevisaac"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/juniordevisaac
        </a>
      </li>
    </ul>
  </main>
);

export default Contact;
