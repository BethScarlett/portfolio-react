import "./App.scss";
import IntroSection from "./Components/IntroSection/IntroSection";
import { homeIntroDescription } from "./assets/TextBlocks/TextBlocks";
import Navbar from "./Components/Navbar/Navbar";
import AboutMe from "./Components/AboutMe/AboutMe";

const App = () => {
  return (
    <div>
      <Navbar />
      <IntroSection
        heading="Junior Software Developer"
        content={homeIntroDescription}
      />
      <AboutMe />
    </div>
  );
};

export default App;
