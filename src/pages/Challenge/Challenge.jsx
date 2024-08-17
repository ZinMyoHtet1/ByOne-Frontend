import "./challenge.css";

import { useState } from "react";
import {
  rankOptions,
  betOptions,
  winrateOptions,
  modeOptions,
} from "../../db/options";
import FilterChallenge from "../../components/FilterChallenge/FilterChallenge";
import { ChallengeCard } from "../../components";

const Challenge = () => {
  const [initialValues, setInitialValues] = useState({
    rank: "any",
    bet: "any",
    winrate: "any",
    mode: "descen",
  });

  const handleChange = (e) => {
    setInitialValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.value };
    });
  };

  return (
    <div id="challenge" className="tab-page">
      <div className="filter-container">
        <FilterChallenge
          label="Rank"
          options={rankOptions}
          name="rank"
          value={initialValues.rank}
          handleChange={handleChange}
        />
        <FilterChallenge
          label="Bet"
          options={betOptions}
          name="bet"
          value={initialValues.bet}
          handleChange={handleChange}
        />
        <FilterChallenge
          label="Winrate"
          options={winrateOptions}
          name="winrate"
          value={initialValues.winrate}
          handleChange={handleChange}
        />
        <FilterChallenge
          label="Mode"
          options={modeOptions}
          name="mode"
          value={initialValues.mode}
          handleChange={handleChange}
        />
      </div>
      <div className="challenge-container">
        <ChallengeCard />
        <ChallengeCard />
      </div>
    </div>
  );
};

export default Challenge;
