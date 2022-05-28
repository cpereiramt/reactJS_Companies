const url_api_host = "http://localhost:3000";
export const getAllCompanies = async () => {
  const response = await fetch(`${url_api_host}/companies`);
  const data = await response.json();
  return data;
};


