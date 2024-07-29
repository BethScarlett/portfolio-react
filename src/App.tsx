import "./App.scss";
import IntroSection from "./Components/IntroSection/IntroSection";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <IntroSection
        heading="Junior Software Developer"
        content="Hey there! My name's Bethany Burrows and I'm an aspiring Junior Software
        Developer. Read on to learn more about myself and the projects I've
        developed."
      />
    </div>
  );
};

export default App;
