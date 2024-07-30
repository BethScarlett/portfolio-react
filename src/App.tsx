import "./App.scss";
import IntroSection from "./Components/IntroSection/IntroSection";
import { homeIntroDescription } from "./assets/TextBlocks/TextBlocks";
import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./Components/AboutMe/AboutMe";
import SkillsSection from "./Components/SkillsSection/SkillsSection";
import PortfolioSection from "./Components/PortfolioSection/PortfolioSection";

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
      <PortfolioSection />
    </div>
  );
};

export default App;
