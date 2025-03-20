import { motion } from "motion/react";

const IconButton = ({ icon, link, ...props }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <motion.button
                className="cursor-pointer rounded-full p-3 bg-transparent border-2 border-white border-solid"
                whileHover={{
                    backgroundColor: "#1a1a1a",
                    scale: 1.15,
                }}
                whileTap={{ scale: 0.95 }}
                {...props}
            >
                {icon}
            </motion.button>
        </a>
    );
};

export default IconButton;
