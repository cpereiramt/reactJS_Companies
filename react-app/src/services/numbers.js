const url_api_host = "http://localhost:3000";

export const getNumberByCompanyID = async (companyID) => {
  const response = await fetch(
    `${url_api_host}/phone_numbers?company_id=${companyID}`
  );
  const data = await response.json();
  return data;
};

export const getNumberByNumberID = async (numberID) => {
  const response = await fetch(`${url_api_host}/phone_numbers/${numberID}`);
  const data = await response.json();
  return data;
};
