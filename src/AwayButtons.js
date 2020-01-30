import React from "react";

function AwayButtons(props) {
  let awayScore = props.scores[0];
  let setScore = props.scores[1];

  return (
    <div className="awayButtons">
      <button
        className="awayButtons__touchdown"
        onClick={() => setScore(awayScore + 7)}
      >
        Away Touchdown
      </button>
      <button
        className="awayButtons__fieldGoal"
        onClick={() => setScore(awayScore + 3)}
      >
        Away Field Goal
      </button>
    </div>
  );
}

export default AwayButtons;
