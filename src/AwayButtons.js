import React from "react";

function AwayButtons(props) {
  return (
    <div className="awayButtons">
      <button
        className="awayButtons__touchdown"
        onClick={() => {
          props.handler("Tigers", 7);
        }}
      >
        Away Touchdown
      </button>
      <button
        className="awayButtons__fieldGoal"
        onClick={() => {
          props.handler("Tigers", 3);
        }}
      >
        Away Field Goal
      </button>
    </div>
  );
}

export default AwayButtons;
