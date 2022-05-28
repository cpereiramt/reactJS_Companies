import React, { useId } from "react";
import { Link } from "react-router-dom";

const Table = ({ headers, data, columnWithLink, urlParams, linkPath }) => {
  const uniqueIDTR = useId();
  const uniqueIDTHLink = useId();
  const uniqueHeader = useId();
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => {
            return <th key={uniqueHeader + index}>{header}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((data, index) => {
          return (
            <tr key={(uniqueIDTR, index)}>
              {Object.keys(headers).map((header, index) => {
                const atribute = headers[index].toLowerCase();
                return (
                  <>
                    {atribute === columnWithLink && (
                      <td>
                        <Link
                          key={uniqueIDTHLink + data[atribute]}
                          to={`${linkPath}${data[urlParams]}`}
                          state={{ stateData: data[urlParams] }}
                        >
                          {data[atribute]}
                        </Link>
                      </td>
                    )}

                    {atribute !== columnWithLink && <td>{data[atribute]}</td>}
                  </>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
