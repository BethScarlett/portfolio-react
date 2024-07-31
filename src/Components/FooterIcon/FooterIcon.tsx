import "./FooterIcon.scss";

type FooterIconProps = {
  imgSrc: string;
  linkTo: string;
};

const FooterIcon = ({ imgSrc, linkTo }: FooterIconProps) => {
  return (
    <a href={linkTo} target="_blank">
      <img src={imgSrc} alt="Icon" />
    </a>
  );
};

export default FooterIcon;
