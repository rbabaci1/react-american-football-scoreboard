import React from "react";

function AwayButtons(props) {
  return (
    <div className="awayButtons">
      <button
        className="awayButtons__touchdown"
        onClick={() => {
          props.handler("Warriors", 3);
        }}
      >
        Away 3 points shot
      </button>
      <button
        className="awayButtons__fieldGoal"
        onClick={() => {
          props.handler("Warriors", 2);
        }}
      >
        Away 2 points shot
      </button>
    </div>
  );
}

export default AwayButtons;
