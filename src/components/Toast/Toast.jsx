/* eslint-disable react/prop-types */
import "./toast.css";

const Toast = ({ label, show }) => {
  return <div className={`toast ${show ? "show" : ""}`}>{label}</div>;
};

export default Toast;
