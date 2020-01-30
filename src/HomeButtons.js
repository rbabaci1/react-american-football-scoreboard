import React from "react";

function HomeButtons(props) {
  return (
    <div className="homeButtons">
      <button
        className="homeButtons__touchdown"
        onClick={() => {
          props.handler("Lions", 7);
        }}
      >
        Home Touchdown
      </button>
      <button
        className="homeButtons__fieldGoal"
        onClick={() => {
          props.handler("Lions", 3);
        }}
      >
        Home Field Goal
      </button>
    </div>
  );
}

export default HomeButtons;
