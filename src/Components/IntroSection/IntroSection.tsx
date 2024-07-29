import "./IntroSection.scss";

type IntroSectionProps = {
  heading: string;
  content: string;
};

const IntroSection = ({ heading, content }: IntroSectionProps) => {
  return (
    <div>
      <h1>{heading}</h1>
      <p>{content}</p>
    </div>
  );
};

export default IntroSection;
