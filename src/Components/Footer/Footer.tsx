import "./Footer.scss";
import { footerImgs, footerLinks } from "../../assets/Arrays/FooterArrays";
import FooterIcon from "../FooterIcon/FooterIcon";

const Footer = () => {
  const handleSetIcons = () => {
    const icons = [];
    for (let i: number = 0; i < 3; i++) {
      icons.push(<FooterIcon imgSrc={footerImgs[i]} linkTo={footerLinks[i]} />);
    }
    return icons;
  };

  return (
    <div className="footer">
      <div className="footer__icons">{handleSetIcons()}</div>
    </div>
  );
};

export default Footer;
