import "./AboutMe.scss";
import SelfPortrait from "/self-portrait.png";
import {
  homeAboutMeOne,
  homeAboutMeTwo,
} from "../../assets/TextBlocks/TextBlocks";

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2 className="about-me__header">About me</h2>
      <img
        className="about-me__image"
        src={SelfPortrait}
        alt="Self portrait of myself"
      />
      <div className="about-me__paragraphs">
        <p>{homeAboutMeOne}</p>
        <p>{homeAboutMeTwo}</p>
      </div>
    </div>
  );
};

export default AboutMe;
