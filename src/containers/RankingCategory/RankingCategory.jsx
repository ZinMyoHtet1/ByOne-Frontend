import { useNavigate } from "react-router";

import { RankingCategoryButton } from "../../components";
import "./ranking-category.css";
import { useState } from "react";

const RankingCategory = () => {
  const navigate = useNavigate();
  const [selectSquad, setSelectSquad] = useState(true);

  const handleSquad = () => {
    navigate("/ranking/squad");
    setSelectSquad(true);
  };

  const handlePlayer = () => {
    navigate("/ranking/player");
    setSelectSquad(false);
  };

  return (
    <div className="ranking-category-container">
      <RankingCategoryButton
        label="Squad"
        handleClick={handleSquad}
        select={selectSquad}
      />
      <RankingCategoryButton
        label="Player"
        handleClick={handlePlayer}
        select={!selectSquad}
      />
    </div>
  );
};

export default RankingCategory;
