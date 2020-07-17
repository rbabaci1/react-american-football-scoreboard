import React from "react";

function HomeButtons(props) {
  return (
    <div className="homeButtons">
      <button
        className="homeButtons__touchdown"
        onClick={() => {
          props.handler("Lakers", 3);
        }}
      >
        Home 3 points shot
      </button>
      <button
        className="homeButtons__fieldGoal"
        onClick={() => {
          props.handler("Lakers", 2);
        }}
      >
        Home 2 points shot
      </button>
    </div>
  );
}

export default HomeButtons;
