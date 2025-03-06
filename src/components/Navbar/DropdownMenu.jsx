import React from "react";

export default function DropdownMenu({links}) {

    return (
        <div className="absolute left-1/2 min-w-40 min-h-14 transform -translate-x-1/2 bg-white z-100 rounded-xl shadow-2xl" >
            <ul className="w-40 list-none">
                {links.map((link, index) => <li key={index} className="p-1.5 m-1.5 rounded-xl text-sm text-(--primary-font-color)"><a href={link.href} className="hover:text-(--highlight-color)">{link.text}</a></li>)}
            </ul>
        </div>
    )

}