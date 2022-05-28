import React, { useEffect, useState } from "react";
import { getNumberByNumberID } from "../../services/numbers";
import { useLocation } from "react-router-dom";
const Number = () => {
  const location = useLocation();
  const numberID = location.state.numberID;
  const [selectedNumber, setSelectedNumber] = useState([]);
  useEffect(() => {
    getNumberByNumberID(numberID).then((data) => setSelectedNumber(data));
  }, [numberID]);

  return (
    <div>
      <h1>{selectedNumber.id}</h1>
      <h2>{selectedNumber.type}</h2>
    </div>
  );
};

export default Number;
