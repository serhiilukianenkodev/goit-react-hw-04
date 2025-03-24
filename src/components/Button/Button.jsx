import css from "./Button.module.css";

const Button = ({ children, type = "button", onClick }) => {
  return (
    <button type={type} className={css.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
