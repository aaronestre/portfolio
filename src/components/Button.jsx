import React from "react";
import "../styles/Button.css";

export default function Button({text, className = "", ...props}) {
    return (
        <>
            <button 
            className={`box-content text-base p-3 rounded-xl w-max shadow-xl font-semibold ${className}`}
                {...props}>
                    {text}
            </button>
        </>
    );
}