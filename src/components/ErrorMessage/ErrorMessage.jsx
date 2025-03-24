import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return <div className={css.errorMessage}>{message}</div>;
};

export default ErrorMessage;
