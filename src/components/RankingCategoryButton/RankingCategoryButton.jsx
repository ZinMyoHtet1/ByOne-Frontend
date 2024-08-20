/* eslint-disable react/prop-types */
import "./ranking-category-button.css";

const RankingCategoryButton = ({ label, handleClick, select }) => {
  return (
    <div
      className={`category-option ${select ? "select" : ""}`}
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

export default RankingCategoryButton;
