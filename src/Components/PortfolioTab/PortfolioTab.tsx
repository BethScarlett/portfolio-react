import "./PortfolioTab.scss";

type PortfolioTabProps = {
  imgSrc: string;
  projectName: string;
};

const PortfolioTab = ({ imgSrc, projectName }: PortfolioTabProps) => {
  return (
    <div>
      <img src={imgSrc} alt={`${projectName} icon`} />
      <div>
        <label>{projectName}</label>
        <div>
          <a href="">Link 1</a>
          <a href="">Link 2</a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTab;
