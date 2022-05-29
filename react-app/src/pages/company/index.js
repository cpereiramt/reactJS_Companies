import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getNumberByCompanyID } from "../../services/numbers";
import BackButton from "../../components/buttonBack";
import Table from "../../components/table";

const Company = () => {
  const [numberByCompanyID, setSelectedCompany] = useState([]);
  const location = useLocation();
  const companyID = location.state.stateData;
  useEffect(() => {
    getNumberByCompanyID(companyID).then((data) => setSelectedCompany(data));
  }, [companyID]);

  return (
    <>
      <div style={{ display: "flex", width: "75vw" }}>
        <BackButton style={{ position: "absolute" }} />
      </div>
      {numberByCompanyID.length > 0 && (
        <>
          <h1>Local Public Office</h1>
          <Table
            data={numberByCompanyID}
            headers={["Id", "Type"]}
            rowKey={"id"}
            columnWithLink="id"
            urlParams="id"
            linkPath="/number/"
          />
        </>
      )}
      {numberByCompanyID.length === 0 && (
        <h2>No Number to Show for this Company!</h2>
      )}
    </>
  );
};

export default Company;
