import React from "react";
import lemonLogo from '../images/lemon_logo_dark.png';


function Header() {
  return (
    <header className="logo">
      <img src={lemonLogo} alt="Little Lemon Logo" />
    </header>
  );
}

export default Header;