import "./AboutMe.scss";
import SelfPortrait from "/self-portrait.png";
import {
  homeAboutMeOne,
  homeAboutMeTwo,
} from "../../assets/TextBlocks/TextBlocks";

const AboutMe = () => {
  return (
    <div>
      <h2>About me</h2>
      <img src={SelfPortrait} alt="Self portrait of myself" />
      <div>
        <p>{homeAboutMeOne}</p>
        <p>{homeAboutMeTwo}</p>
      </div>
    </div>
  );
};

export default AboutMe;
