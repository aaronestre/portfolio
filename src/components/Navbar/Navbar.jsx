import { React } from "react";

import NavLink from "./NavLink";
import NavDropdown from "./NavDropdown";

export default function Navbar() {
    
    const sweLinks= [
        { text: "Overview", href: "/#swe-overview" },
        { text: "View my projects", href: "/swe" },
    ];

    const artLinks = [
        { text: "Overview", href: "/#art-overview" },
        { text: "Explore my portfolio", href: "/art" },
    ];

    return (
        <div className="backdrop-blur-md sticky top-2 mx-auto h-13 flex justify-center items-center rounded-2xl min-w-[410px] font-(family-name:--secondary-font) w-1/5 shadow-2xl z-2 border-2 border-gray-400/50 border-solid">
            <nav className="w-full flex justify-center items-center gap-4">
                <NavLink href="/" text="Home" />
                <NavDropdown links={sweLinks} text="SWE"/>
                <NavDropdown links={artLinks} text="Art"/>
                <NavLink href="/about" text="About" />
                <NavLink href="/#contact" text="Contact" />
            </nav>
        </div>
    );
}
