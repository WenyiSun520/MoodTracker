import React from 'react'
export default function Header() {
  return (
    <div>
      <header>
        <h1>Mood Tracker</h1>
        <menu className="menu">
          <li>Main Page(Mood checkin and memo input)</li>
          <li>Statistics</li>
          <li>Reminder</li>
          <li>Helps</li>
        </menu>
      </header>
    </div>
  );
}
