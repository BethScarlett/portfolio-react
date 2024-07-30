import "./SkillTab.scss";

type SkillTabProps = {
  imgSource: string;
  label: string;
};

const SkillTab = ({ imgSource, label }: SkillTabProps) => {
  return (
    <div>
      <img src={imgSource} alt={`${label} icon`} />
      <label>{label}</label>
    </div>
  );
};

export default SkillTab;
