import React from "react";
import { motion } from "motion/react";

export default function Button({ text, type, className = "", ...props }) {

    const getColor = () => {
        switch (type) {
            case "art":
                return "var(--art-color)";
            default:
                return "var(--swe-color)";
        }
    };

    return (
        <>
            <motion.button
                className={`box-content text-base p-3 rounded-xl w-max shadow-xl font-semibold ${className}`}
                whileHover={{ backgroundColor: getColor(), scale: 1.05, color: "rgb(255, 255, 255)" }}
                whileTap={{ scale: 0.95 }}
                {...props}
            >
                {text}
            </motion.button>
        </>
    );
}
