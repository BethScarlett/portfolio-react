import PortfolioTab from "../PortfolioTab/PortfolioTab";
import "./PortfolioSection.scss";

const PortfolioSection = () => {
  const handleSetTabs = () => {
    const tabs = [];
    for (let i: number = 0; i < 6; i++) {
      tabs.push(<PortfolioTab />);
    }
    return tabs;
  };

  return (
    <div>
      <h2>Portfolio</h2>
      <div>{handleSetTabs()}</div>
    </div>
  );
};

export default PortfolioSection;
