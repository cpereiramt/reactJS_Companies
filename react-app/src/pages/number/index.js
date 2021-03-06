import React, { useEffect, useState } from "react";
import { getNumberByNumberID } from "../../services/numbers";
import { useLocation } from "react-router-dom";
import BackButton from "../../components/buttonBack";
import { DivAccent } from "./style";
const Number = () => {
  const location = useLocation();
  const numberID = location.state ? location.state.stateData : null;
  const [selectedNumber, setSelectedNumber] = useState([]);
  useEffect(() => {
    getNumberByNumberID(numberID).then((data) => setSelectedNumber(data));
  }, [numberID]);

  return (
    <>
      {numberID !== null && (
        <>
          <div style={{ display: "flex", width: "75vw" }}>
            <BackButton style={{ position: "absolute" }} />
          </div>
          <DivAccent>
            <h1>{selectedNumber.id}</h1>

            <h2>{selectedNumber.type}</h2>
          </DivAccent>
        </>
      )}
      {numberID === null && (
        <>
          <div style={{ display: "flex", width: "75vw" }}>
            <BackButton style={{ position: "absolute" }} />
          </div>
          <h2>No Data to Show ! </h2>
        </>
      )}
    </>
  );
};

export default Number;
