import { motion } from "motion/react";
import { IconPlayerPlayFilled } from '@tabler/icons-react';

const YouTubeThumbnail = ({ videoId, title, aspect = 16 / 9}) => {
    const variants = {
        hover: { opacity: 1, scale: 1.05 },
    };

    const imgVariant = {
        hover: { filter: "brightness(0.4)" },
    };

    return (
        <motion.a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover="hover"
            className="relative block overflow-hidden rounded-lg shadow-lg"
            style={{ aspectRatio: aspect }}
        >

            <motion.img
                className="block w-full h-full object-cover rounded-lg"
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={title}
                variants={imgVariant}
            />
            <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0"
                variants={variants}
            >
                <IconPlayerPlayFilled color="#fff" size="48px" />

            </motion.div>
            <motion.p
                className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-base sm:text-lg md:text-xl text-center opacity-0"
                variants={variants}
            >
                {title}
            </motion.p>
        </motion.a>
    );
};

export default YouTubeThumbnail;
