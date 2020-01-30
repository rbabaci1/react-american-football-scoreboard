import React from "react";

function ScoreBoard(props) {
  return (
    <div className="topRow">
      <div className="home">
        <h2 className="home__name">Lions</h2>
        <div className="home__score">{props.scores[0]}</div>
      </div>

      <div className="timer">00:00</div>

      <div className="away">
        <h2 className="away__name">Tigers</h2>
        <div className="away__score">{props.scores[1]}</div>
      </div>
    </div>
  );
}

export default ScoreBoard;
