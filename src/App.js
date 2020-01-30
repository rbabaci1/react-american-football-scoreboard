import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import ScoreBoard from "./ScoreBoard";
import HomeButtons from "./HomeButtons";
import AwayButtons from "./AwayButtons";

function App() {
  const [homeScore, setHomeScore] = useState(101);
  const [awayScore, setAwayScore] = useState(96);

  function scoreHandler(teamName, amount) {
    if (teamName === "Lakers") {
      setHomeScore(homeScore + amount);
    } else if (teamName === "Utah Jazz") {
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
