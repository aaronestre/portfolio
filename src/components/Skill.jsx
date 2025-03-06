const Skill = ({ src, alt, text }) => {
    return (
        <div className="rounded-xl p-4 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 flex flex-col justify-center items-center gap-2 shadow-lg transition-transform ease-in-out hover:-translate-y-1 hover:scale-105">
            <img className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20" src={src} alt={alt} />
            <h2 className="text-center text-sm sm:text-base md:text-lg text-(--primary-font-color)">{text}</h2>
        </div>
    );
};

export default Skill;
