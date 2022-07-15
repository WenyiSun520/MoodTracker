import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav id="menu">
      <ul className="menu-list">
        <li>
          <Link to="/" activeclassname="activeLink">
            Check-In
          </Link>
        </li>

        <li>
          <Link to="reminder" activeclassname="activeLink">
            Reminder
          </Link>
        </li>

        <li>
          <Link to="summary" activeclassname="activeLink">
            Summary
          </Link>
        </li>
      </ul>
    </nav>
  );
}

