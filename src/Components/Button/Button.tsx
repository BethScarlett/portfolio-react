import "./Button.scss";

type ButtonProps = {
  heading: string;
  variant: "menu" | "contact";
};

const Button = ({ heading, variant }: ButtonProps) => {
  return (
    <>
      <button className={`button button--${variant}`}>{heading}</button>
    </>
  );
};

export default Button;
