import { motion } from "motion/react";

const Skill = ({ src, alt, text }) => {
    return (
        <motion.div
            className="rounded-xl p-2 flex flex-row items-center bg-(--background-semi-dark) gap-2 shadow-lg"
            whileHover={{ scale: 1.05 }}
        >
            <img
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9"
                src={src}
                alt={alt}
            />
            <h2 className="text-sm sm:text-md md:text-md text-(--primary-font-color)">
                {text}
            </h2>
        </motion.div>
    );
};

export default Skill;