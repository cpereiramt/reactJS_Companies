import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getNumberByCompanyID } from "../../services/numbers";

import { Link } from "react-router-dom";

const Company = () => {
  const [numberByCompanyID, setSelectedCompany] = useState([]);
  const location = useLocation();
  const companyID = location.state.companyID;
  useEffect(() => {
    getNumberByCompanyID(companyID).then((data) => setSelectedCompany(data));
  }, []);

  return (
    <table>
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
                to={`/numbers/${number.id}`}
                state={{ numberID: number.id }}
              >
                {number.id}
              </Link>
            </td>
            <td>{number.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Company;
