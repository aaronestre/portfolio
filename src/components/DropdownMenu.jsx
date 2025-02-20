import React from "react";

import "../styles/DropdownMenu.css";

export default function DropdownMenu({links}) {

    return (
        <div className="dropdown-menu" >
            <ul>
                {links.map((link, index) => <li key={index}><a href={link.href}>{link.text}</a></li>)}
            </ul>
        </div>
    )

}