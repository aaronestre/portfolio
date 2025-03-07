import { motion } from "motion/react";

const Skill = ({ src, alt, text }) => {
    return (
        <motion.div 
            className="rounded-xl p-4 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 flex flex-col bg-(--background-semi-dark) justify-center items-center gap-2 shadow-lg"
            whileHover={{ scale: 1.1 }}
        >
            <img
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20"
                src={src}
                alt={alt}
            />
            <h2 className="text-center text-sm sm:text-base md:text-lg text-(--primary-font-color)">
                {text}
            </h2>
        </motion.div>
    );
};

export default Skill;
