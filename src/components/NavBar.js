import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav id="menu">
      <ul className="menu-list">
        <li>
          <Link exact to="/" activeClassName="activeLink">
            Check-In
          </Link>
        </li>

        <li>
          <Link exact to="reminder" activeClassName="activeLink">
            Reminder
          </Link>
        </li>

        <li>
          <Link exact to="summary" activeClassName="activeLink">
            Summary
          </Link>
        </li>
      </ul>
    </nav>
  );
}

