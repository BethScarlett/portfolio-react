import "./App.scss";
import IntroSection from "./Components/IntroSection/IntroSection";
import { homeIntroDescription } from "./assets/TextBlocks/TextBlocks";
import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./Components/AboutMe/AboutMe";
import SkillsSection from "./Components/SkillsSection/SkillsSection";
import PortfolioSection from "./Components/PortfolioSection/PortfolioSection";
import ContactSection from "./Components/ContactSection/ContactSection";
import Footer from "./Components/Footer/Footer";

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
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
