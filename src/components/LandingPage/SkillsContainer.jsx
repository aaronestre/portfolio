import Skill from "../Skill";

const SkillsContainer = ({skills}) => {
    return (
        <div className="flex justify-center items-center flex-wrap gap-6 md:gap-8 mt-10 md:mt-14 w-full max-w-3xl m-14 mb-28">
                {skills.map((skill, key) => (
                    <Skill src={skill.src} alt={skill.alt} text={skill.text} />
                ))}
        </div>
    )
}

export default SkillsContainer;