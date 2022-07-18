import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight
} from "@fortawesome/free-regular-svg-icons";

export default function NavBar() {
  return (
    <nav className="menu">
      <NavLink className="menu" to="/" activeclassname="activeLink">
        Check-In
      </NavLink>

      <NavLink className="menu" to="reminder" activeclassname="activeLink">
        Reminder
      </NavLink>
      <NavLink className="menu" to="signup" activeclassname="activeLink">
        SignUp
      </NavLink>
      <NavLink className="menu" to="signout" activeclassname="activeLink">
        <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </NavLink>
    </nav>
  );
}

