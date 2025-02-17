import React from "react";

export default function Button({text, onMouseEnter, onMouseLeave}) {
    return (
        <>
            <button 
                onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave}
                className="button">
                    {text}
            </button>
        </>
    );
}