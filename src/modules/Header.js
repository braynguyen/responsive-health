import React from "react";
import "./header.css"
import img from './responsive-logo.png'

export default function Header() {
  return (
    <div className="group-2215">
      <img
        src={img}
        alt="logo"
        id="logo"
      />
      <p id="responsive-medicine">Responsive Medicine</p>
      <div class='nav'>
        <ul>
          <li>Our Mission</li>
          <li>Schedule</li>
          <li>Home</li>
        </ul>
      </div>
    </div>
  )
}
