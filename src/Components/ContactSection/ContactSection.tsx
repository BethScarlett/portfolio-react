import Button from "../Button/Button";
import "./ContactSection.scss";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <h2 className="contact-section__header">
        Feel free to get in touch below:
      </h2>
      <Button heading="Contact me" variant="contact" />
    </div>
  );
};

export default ContactSection;
