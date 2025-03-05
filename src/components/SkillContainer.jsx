const SkillContainer = ({ src, alt, text }) => {
    return (
        <div className="rounded-xl p-2.5 w-40 h-40 flex flex-col justify-center items-center gap-2.5 shadow-2xl transition ease-in-out hover:-translate-y-1 hover:scale-110">
            <img className="w-20 h-20" src={src} alt={alt} />
            <h2 className="text-center text-xl">{text}</h2>
        </div>
    );
};

export default SkillContainer;
