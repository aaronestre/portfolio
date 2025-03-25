import { motion } from "motion/react";

const ArtImg = ({ text, aspect = 3 / 2, scale = 1, size = "w-full", maxWidth = "max-w-full", ...props }) => {

    const variants = {
        hover: { opacity: 1 },
    };

    const imgVariant = {
        hover: { filter: "brightness(0.4)" },
    };

    return (
        <motion.div
            whileHover="hover"
            className="art-container relative flex justify-center items-center"
        >
            <motion.img
                className={`${size} ${maxWidth} block h-auto rounded-lg`}
                style={{ aspectRatio: aspect, transform: `scale(${scale})` }}
                {...props}
                variants={imgVariant}
            />
            <motion.p
                className="absolute text-white text-base sm:text-lg md:text-xl text-center opacity-0"
                variants={variants}
            >
                {text}
            </motion.p>
        </motion.div>
    );
};

export default ArtImg;
