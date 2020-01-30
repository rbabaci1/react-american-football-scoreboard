import React from "react";

function HomeButtons(props) {
  let homeScore = props.scores[0];
  let setScore = props.scores[1];

  return (
    <div className="homeButtons">
      <button
        className="homeButtons__touchdown"
        onClick={() => setScore(homeScore + 7)}
      >
        Home Touchdown
      </button>
      <button
        className="homeButtons__fieldGoal"
        onClick={() => setScore(homeScore + 3)}
      >
        Home Field Goal
      </button>
    </div>
  );
}

export default HomeButtons;
