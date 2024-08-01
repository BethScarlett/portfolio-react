import PortfolioTab from "../PortfolioTab/PortfolioTab";
import {
  portfolioImgs,
  portfolioLabels,
  portfolioLinks,
} from "../../assets/Arrays/PortfolioArrays";
import "./PortfolioSection.scss";

const PortfolioSection = () => {
  const handleSetTabs = () => {
    const tabs = [];
    for (let i: number = 0; i < 6; i++) {
      tabs.push(
        <PortfolioTab
          imgSrc={portfolioImgs[i]}
          projectName={portfolioLabels[i]}
          githubLink={portfolioLinks[i][0]}
          deploymentLink={portfolioLinks[i][1]}
        />
      );
    }
    return tabs;
  };

  return (
    <div className="portfolio-section">
      <h2 className="portfolio-section__label" id="portfolio">
        Portfolio
      </h2>
      <div className="portfolio-section__tabs">{handleSetTabs()}</div>
    </div>
  );
};

export default PortfolioSection;
