import Button from "../Button/Button";
import "./ContactSection.scss";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <h2 className="contact-section__header" id="contact-me">
        Feel free to get in touch below:
      </h2>
      <a href="mailto:scarlettroseprofessional@gmail.com">
        <Button heading="Contact me" variant="contact" />
      </a>
    </div>
  );
};

export default ContactSection;
