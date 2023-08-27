import React from "react";
import lemonLogo from '../images/lemon-logo-dark.png';


function Header() {
  return (
    <header class="logo">
      <img src={lemonLogo} alt="Little Lemon Logo" />
    </header>
  );
}

export default Header;