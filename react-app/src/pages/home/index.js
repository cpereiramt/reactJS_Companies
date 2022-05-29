import React, { useEffect, useState } from "react";
import { getAllCompanies } from "../../services/companies";
import Table from "../../components/table";
const Home = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    getAllCompanies().then((data) => setCompanies(data));
  }, []);

  return (
    <>
      <h1>Companies</h1>
      {companies.length > 0 && (
        <Table
          data={companies}
          headers={["Name", "Vatin"]}
          rowKey={"vatin"}
          columnWithLink="name"
          urlParams="id"
          linkPath="/company/"
        />
      )}
    </>
  );
};

export default Home;
