import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import ScoreBoard from "./ScoreBoard";
import HomeButtons from "./HomeButtons";
import AwayButtons from "./AwayButtons";

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
        <AwayButtons scores={[awayScore, setAwayScore]} />
      </section>
    </div>
  );
}

export default App;
