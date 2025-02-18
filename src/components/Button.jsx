import React from "react";

export default function Button({text, onMouseEnter, onMouseLeave, ...props}) {
    return (
        <>
            <button 
                onMouseEnter={onMouseEnter} 
                onMouseLeave={onMouseLeave}
                className="button"
                {...props}>
                    {text}
            </button>
        </>
    );
}