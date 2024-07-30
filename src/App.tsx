import "./App.scss";
import IntroSection from "./Components/IntroSection/IntroSection";
import { homeIntroDescription } from "./assets/TextBlocks/TextBlocks";
import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./Components/AboutMe/AboutMe";
import SkillsSection from "./Components/SkillsSection/SkillsSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <IntroSection
        heading="Junior Software Developer"
        content={homeIntroDescription}
      />
      <AboutMe />
      <SkillsSection />
    </div>
  );
};

export default App;
