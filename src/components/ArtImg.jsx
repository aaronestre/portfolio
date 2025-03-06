import { motion } from "motion/react";
const ArtImg = ({ text, ...props }) => {

    const variants = {
        hover: {opacity: 1},
    }

    const imgVariant = {
        hover: {filter: "brightness(0.4)"},
    }

    return (
        <motion.div whileHover="hover" className="art-container relative">
            <motion.img
                className="block w-full h-auto aspect-[3/2] rounded-lg"
                {...props}
                variants={imgVariant}
            />
            <motion.p
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-base sm:text-lg md:text-xl text-center opacity-0"
                variants={variants}
            >
                {text}
            </motion.p>
        </motion.div>
    );
};

export default ArtImg;