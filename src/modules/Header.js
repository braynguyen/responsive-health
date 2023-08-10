import * as React from "react";
import "./header.css"
import img from './responsive-logo.png'
import { Link } from "react-router-dom";

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
          <Link to="/Mission">
            <li>Our Mission</li>
          </Link>
          <Link to="/Schedule">
            <li>Schedule</li>
          </Link>
          <Link to="/" >
            <li>Home</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}
