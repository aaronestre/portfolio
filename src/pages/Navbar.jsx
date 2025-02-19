import { React, useState } from "react";

import "../styles/Navbar.css";
import Button from "../components/Button";
import DropdownMenu from "../components/DropdownMenu";
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
                    {isSWEDropdownOpen && (
                        <DropdownMenu
                            className="dropdown-menu"
                            links={["Overview", "View my projects"]}
                            onMouseEnter={handleSWEEnter}
                            onMouseLeave={handleSWELeave}
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
                            links={["Overview", "Explore my portfolio"]}
                            onMouseEnter={handleArtEnter}
                            onMouseLeave={handleArtLeave}
                        />
                    )}
                </div>
                <div className="link">
                    <a>Contact</a>
                </div>
            </nav>
        </div>
    );
}
