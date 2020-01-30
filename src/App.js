import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import ScoreBoard from "./ScoreBoard";
import HomeButtons from "./HomeButtons";
import AwayButtons from "./AwayButtons";

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  function scoreHandler(teamName, amount) {
    if (teamName === "Lions") {
      setHomeScore(homeScore + amount);
    } else if (teamName === "Tigers") {
      setAwayScore(awayScore + amount);
    }
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <ScoreBoard scores={[homeScore, awayScore]} />
        <BottomRow />
      </section>

      <section className="buttons">
        <HomeButtons handler={scoreHandler} />
        <AwayButtons handler={scoreHandler} />
      </section>
    </div>
  );
}

export default App;
