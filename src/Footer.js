import React from "react";
export default function Footer() {
  return (
    <footer>
      <h2>MoodTracker</h2>
      <p>Designed and developed by WenyiSun</p>
      <div className="links">
        <a
          className="contact-link"
          target="_blank"
          href="https://www.linkedin.com/in/wenyi-sun-519942195/"
        >
          LinkedIn
        </a>
        <a
          className="contact-link"
          target="_blank"
          href="https://winnieeesun.wixsite.com/wscv"
        >
          More About Me
        </a>
        <a
          className="contact-link"
          target="_blank"
          href="mailto: winnieee.sun@gmail.com"
        >
          Send Email
        </a>
      </div>
    </footer>
  );
}
