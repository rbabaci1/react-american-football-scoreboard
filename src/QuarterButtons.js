import React from "react";

function UpdateQuarter(props) {
  const [qrtNum, setQrt] = [props.qrtState[0], props.qrtState[1]];
  return (
    <div className="quarter-btns">
      <h2>Update Quarter</h2>
      <button
        className="qrt-btn"
        onClick={() => {
          if (qrtNum < 4) {
            setQrt(qrtNum + 1);
          }
        }}
      >
        +
      </button>
      <button
        className="qrt-btn"
        onClick={() => {
          if (qrtNum > 1) {
            setQrt(qrtNum - 1);
          }
        }}
      >
        -
      </button>
    </div>
  );
}

export default UpdateQuarter;
