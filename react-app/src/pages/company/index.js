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
      <h1>Local Public Office</h1>
      {numberByCompanyID.length > 0 && (
        <Table
          data={numberByCompanyID}
          headers={["Id", "Type"]}
          rowKey={"id"}
          columnWithLink="id"
          urlParams="id"
          linkPath="/number/"
        />
      )}
      {/* <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {numberByCompanyID.map((number) => (
            <tr key={number.id}>
              <td>
                <Link
                  to={`/number/${number.id}`}
                  state={{ numberID: number.id }}
                >
                  {number.id}
                </Link>
              </td>
              <td>{number.type}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </>
  );
};

export default Company;
