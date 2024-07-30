import "./SkillTab.scss";

type SkillTabProps = {
  imgSource: string;
  label: string;
};

const SkillTab = ({ imgSource, label }: SkillTabProps) => {
  return (
    <div className="skill-tab">
      <img className="skill-tab__image" src={imgSource} alt={`${label} icon`} />
      <label className="skill-tab__label">{label}</label>
    </div>
  );
};

export default SkillTab;
