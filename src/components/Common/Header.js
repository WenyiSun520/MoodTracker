import React from 'react'
import NavBar from './NavBar'
export default function Header() {
  return (
    <div>
      <header>
        <div>
          <h1>Mood Tracker</h1>
          <a>
            An application help you to track your mood and notify your mental
            health
          </a>
        </div>
        <NavBar />
      </header>
    </div>
  );
}
