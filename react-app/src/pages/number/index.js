import React, { useEffect, useState } from "react";
import { getNumberByNumberID } from "../../services/numbers";
import { useLocation } from "react-router-dom";
import BackButton from "../../components/buttonBack";

const Number = () => {
  const location = useLocation();
  const numberID = location.state.stateData;
  const [selectedNumber, setSelectedNumber] = useState([]);
  useEffect(() => {
    getNumberByNumberID(numberID).then((data) => setSelectedNumber(data));
  }, [numberID]);

  return (
    <div>
      <div style={{ display: "flex", width: "75vw" }}>
        <BackButton style={{ position: "absolute" }} />
      </div>
      <h1>{selectedNumber.id}</h1>
      <h2>{selectedNumber.type}</h2>
    </div>
  );
};

export default Number;
