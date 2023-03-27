import './button.css';

const Button = ({ text, buttonClass, ...otherProps }) => {
  return (
    <button className={`button-container ${buttonClass}`} {...otherProps}>
      {text}
    </button>
  );
};

export default Button;
