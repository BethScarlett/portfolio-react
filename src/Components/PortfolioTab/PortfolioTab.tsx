import "./PortfolioTab.scss";
import GitHubIcon from "/Images/Portfolio/project-github-link-icon.png";
import DeploymentIcon from "/Images/Portfolio/project-deployment-link-icon.png";

type PortfolioTabProps = {
  imgSrc: string;
  projectName: string;
};

const PortfolioTab = ({ imgSrc, projectName }: PortfolioTabProps) => {
  return (
    <div className="portfolio-tab">
      <img
        className="portfolio-tab__image"
        src={imgSrc}
        alt={`${projectName} icon`}
      />
      <div className="portfolio-tab__project">
        <label className="portfolio-tab__name">{projectName}</label>
        <div className="portfolio-tab__links">
          <a className="portfolio-tab__link" href="#" target="_blank">
            <img
              className="portfolio-tab__icon"
              src={GitHubIcon}
              alt="Link to github repository"
            />
          </a>
          <a className="portfolio-tab__link" href="#" target="_blank">
            <img
              className="portfolio-tab__icon"
              src={DeploymentIcon}
              alt="Link to site deployment"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTab;
