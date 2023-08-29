import React from "react";
import lemonLogo from "../images/little_lemon_logo_tall.jpg";

function Footer() {
  return (
    <footer>
      <div>
        <img className="small-logo" src={lemonLogo} alt="lucky shrub logo" />
      </div>
      <div>
        <p>Navigation</p>
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
            <a href="/reservations.html">Reservations</a>
          </li>
          <li>
            <a href="/online-order.html">Online Order</a>
          </li>
          <li>
            <a href="/login.html">Login</a>
          </li>
        </ul>
      </div>
      <div>
        <p>Contact Us</p>
        <ul>
          <li>
            <a href="tel:555-555-5555">555-555-5555</a>
          </li>
          <li>
            <a href="mailto:little-lemon@gmail.com"> little-lemon@gmail.com</a>
          </li>
          <li>
            <a href="https://goo.gl/maps/7g7m9B1mNwD2">
              123 Main Street, Anytown, USA
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>Social Media Links</p>
        <ul>
          <li>
            <a href="https://www.facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://www.twitter.com">Twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
