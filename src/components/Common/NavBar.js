import React from "react";
import { NavLink } from "react-router-dom";


export default function NavBar() {
  return (
    <nav className="menu">
      <NavLink className="menu" to="/" activeclassname="activeLink">
        Check-In
      </NavLink>

      <NavLink className="menu" to="reminder" activeclassname="activeLink">
        Reminder
      </NavLink>
    </nav>
  );
}

