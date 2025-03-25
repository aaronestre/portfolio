import Skill from "../Skill";

const SkillsContainer = ({skills}) => {
    return (
        <div className="flex flex-row flex-wrap gap-2 mx-auto mb-5">
                {skills.map((skill, key) => (
                    <Skill key={key} src={skill.src} alt={skill.alt} text={skill.text} />
                ))}
        </div>
    )
}

export default SkillsContainer;