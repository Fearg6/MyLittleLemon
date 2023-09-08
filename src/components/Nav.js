import React from "react";
import handleClick from "../components/handleClick";

function Nav() {
  return (
    <nav className="online-pages">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about.html">About</a>
        </li>
        <li>
          <a href="/menu.html">Menu</a>
        </li>
        <li>
          <a href="#booking-page" onClick={handleClick("booking-page")}>
            Reservations
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
