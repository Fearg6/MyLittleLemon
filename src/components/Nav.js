import React from "react";

function Nav() {
    return (
        <nav>
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
        </nav>
    );
}

export default Nav;