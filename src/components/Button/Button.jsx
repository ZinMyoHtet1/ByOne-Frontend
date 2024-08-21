/* eslint-disable react/prop-types */
import "./button.css";

const Button = ({ label, handleClick = () => {} }) => {
  return (
    <div className="button btn" onClick={handleClick}>
      {label}
    </div>
  );
};

export default Button;
