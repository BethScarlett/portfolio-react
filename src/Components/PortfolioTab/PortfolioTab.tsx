import "./PortfolioTab.scss";
import GitHubIcon from "/Images/Portfolio/project-github-link-icon.png";
import DeploymentIcon from "/Images/Portfolio/project-deployment-link-icon.png";
import { useState } from "react";

type PortfolioTabProps = {
  imgSrc: string;
  projectName: string;
  githubLink: string;
  deploymentLink: string;
};

const PortfolioTab = ({
  imgSrc,
  projectName,
  githubLink,
  deploymentLink,
}: PortfolioTabProps) => {
  const [showGitTooltip, setShowGitTooltip] = useState<boolean>(false);
  const [showDepTooltip, setShowDepTooltip] = useState<boolean>(false);

  const handleShowTooltip = (toToggle: string) => {
    switch (toToggle) {
      case "Git": {
        setShowGitTooltip(!showGitTooltip);
        break;
      }
      case "Deploy": {
        setShowDepTooltip(!showDepTooltip);
        break;
      }
    }
    return;
  };

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
          <a className="portfolio-tab__link" href={githubLink} target="_blank">
            <img
              className="portfolio-tab__icon"
              src={GitHubIcon}
              alt="Link to github repository"
              onMouseOver={() => handleShowTooltip("Git")}
              onMouseOut={() => handleShowTooltip("Git")}
            />
            <label
              className={`portfolio-tab__tooltip portfolio-tab__tooltip--${showGitTooltip}`}
            >
              To Github
            </label>
          </a>
          <a
            className="portfolio-tab__link"
            href={deploymentLink}
            target="_blank"
          >
            <img
              className="portfolio-tab__icon"
              src={DeploymentIcon}
              alt="Link to site deployment"
              onMouseOver={() => handleShowTooltip("Deploy")}
              onMouseOut={() => handleShowTooltip("Deploy")}
            />
            <label
              className={`portfolio-tab__tooltip portfolio-tab__tooltip--${showDepTooltip}`}
            >
              To deployed site (If hosted)
            </label>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTab;
