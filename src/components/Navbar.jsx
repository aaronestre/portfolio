import { React, useState } from "react";

import "../styles/Navbar.css";
import Button from "./Button";
import DropdownMenu from "./DropdownMenu";
import useNavbar from "../hooks/useNavbar";

export default function Navbar() {
    const {
        isSWEDropdownOpen,
        isArtDropdownOpen,
        handleSWEEnter,
        handleSWELeave,
        handleArtEnter,
        handleArtLeave,
    } = useNavbar();

    return (
        <div className="navbar">
            <nav className="nav-links">
                <div className="link">
                    <a href="/">Home</a>
                </div>
                <div
                    className="link"
                    onMouseEnter={handleSWEEnter}
                    onMouseLeave={handleSWELeave}
                >
                    <Button text="SWE" />
                    { isSWEDropdownOpen && (
                        <DropdownMenu
                            className="dropdown-menu"
                            links={[{text: "Overview", href:"/"}, {text: "View my projects", href:"/swe"}]}
                        />
                    )}
                </div>
                <div
                    className="link"
                    onMouseEnter={handleArtEnter}
                    onMouseLeave={handleArtLeave}
                >
                    <Button text="Art" />
                    {isArtDropdownOpen && (
                        <DropdownMenu
                            className="dropdown-menu"
                            links={[{text: "Overview", href:"/"}, {text: "Explore my portfolio", href:"/art"}]}
                        />
                    )}
                </div>
                <div className="link">
                    <a href="/#about">About</a>
                </div>
                <div className="link">
                    <a href="/#contact">Contact</a>
                </div>
            </nav>
        </div>
    );
}

