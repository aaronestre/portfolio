import React from "react";

import "../styles/Navbar.css";

export default function Navbar() {
    return (
        <div className="navbar">
            <nav className="nav-links">
                <div className="link">
                    <a href="/">Home</a>
                </div>
                <div className="link">
                    <a href="/swe">SWE</a>
                </div>
                <div className="link">
                    <a href="/art">Art</a>
                </div>
                <div className="link">
                    <a>Contact</a>
                </div>
            </nav>
        </div>
    );
}