import SkillTab from "../SkillTab/SkillTab";
import { skillTabImgs, skillTabLabels } from "../../assets/Arrays/SkillArrays";
import "./SkillsSection.scss";

const SkillsSection = () => {
  const handleSetIcons = () => {
    const icons = [];
    for (let i: number = 0; i < 9; i++) {
      icons.push(
        <SkillTab imgSource={skillTabImgs[i]} label={skillTabLabels[i]} />
      );
    }
    return icons;
  };

  return (
    <div>
      <div>
        <h2>Skills</h2>
        <label>My skills include: </label>
        {handleSetIcons()}
      </div>
    </div>
  );
};

export default SkillsSection;
