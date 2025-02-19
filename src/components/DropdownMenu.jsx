import React from "react";

export default function DropdownMenu({links, onMouseEnter, onMouseLeave}) {

    return (
        <div className="dropdown-menu" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <ul>
                {links.map((link, index) => <li key={index}>{link}</li>)}
            </ul>
        </div>
    )

}