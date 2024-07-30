import SkillTab from "../SkillTab/SkillTab";
import { skillTabImgs, skillTabLabels } from "../../assets/Arrays/SkillArrays";
import "./SkillsSection.scss";

const SkillsSection = () => {
  const handleSetIcons = () => {
    const icons = [];
    for (let i: number = 0; i < 9; i++) {
      icons.push(
        <SkillTab
          imgSource={skillTabImgs[i]}
          label={skillTabLabels[i]}
          key={i}
        />
      );
    }
    return icons;
  };

  return (
    <div className="skills-section">
      <h2 className="skills-section__header">Skills</h2>
      <label className="skills-section__header">My skills include: </label>
      <div className="skills-section__icons">{handleSetIcons()}</div>
    </div>
  );
};

export default SkillsSection;
