import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import ScoreBoard from "./ScoreBoard";
import HomeButtons from "./HomeButtons";

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <ScoreBoard scores={[homeScore, awayScore]} />
        <BottomRow />
      </section>

      <section className="buttons">
        <HomeButtons scores={[homeScore, setHomeScore]} />

        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => setAwayScore(awayScore + 7)}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => setAwayScore(awayScore + 3)}
          >
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
