import React from "react";
import { motion } from "motion/react";

export default function Button({
	text,
	type = "default",
	fontSize = "base",
	padding = "2",
    rounded ="xl",
	className = "",
	...props
}) 
    {
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
				className={`cursor-pointer box-content text-${fontSize} p-${padding} rounded-${rounded} shadow-xl font-semibold bg-transparent ${className} text-white`}
				whileHover={{
					backgroundColor: getColor(),
					scale: 1.05,
					color: "rgb(255, 255, 255)"
				}}
				whileTap={{ scale: 0.95 }}
				{...props}
			>
				{text}
			</motion.button>
		</>
	);
}
