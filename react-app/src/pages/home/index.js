import React, { useEffect, useState } from "react";
import { getAllCompanies } from "../../services/companies";
import { Link } from "react-router-dom";
const Home = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    getAllCompanies().then((data) => setCompanies(data));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Vatin</th>
        </tr>
      </thead>
      <tbody>
        {companies.map((company) => (
          <tr key={company.vatin}>
            <td>
              <Link
                to={`/companies/${company.id}`}
                state={{ companyID: company.id }}
              >
                {company.name}
              </Link>
            </td>

            <td>{company.vatin}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Home;
