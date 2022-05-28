import React, { useEffect, useState } from "react";
import { getAllCompanies } from "../../services/companies";

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
            <td>{company.name}</td>
            <td>{company.vatin}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Home;
