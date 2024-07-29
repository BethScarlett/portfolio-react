import "./IntroSection.scss";

type IntroSectionProps = {
  heading: string;
  content: string;
};

const IntroSection = ({ heading, content }: IntroSectionProps) => {
  return (
    <div className="intro-section">
      <h1 className="intro-section__header">{heading}</h1>
      <p className="intro-section__content">{content}</p>
    </div>
  );
};

export default IntroSection;
