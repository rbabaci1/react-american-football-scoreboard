import React, { useState } from "react";
import "./App.css";
import QuarterButtons from "./QuarterButtons";

const BottomRow = () => {
  const [qrtNum, setQrt] = useState(4);
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Fouls</h3>
        <div className="down__value">7</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">Kobe</h3>
        <div className="toGo__value">60</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{qrtNum}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Fouls</h3>
        <div className="ballOn__value">12</div>
      </div>
      <QuarterButtons qrtState={[qrtNum, setQrt]} />
    </div>
  );
};

export default BottomRow;
