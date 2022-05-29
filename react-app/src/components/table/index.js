import React, { useId } from "react";
import { Link } from "react-router-dom";
import {
  TableWrapper,
  TableEl,
  THead,
  TheadData,
  THeadRow,
  TBody,
  TBodyRow,
  TBodyData,
  TableRowLink,
} from "./style";

const Table = ({ headers, data, columnWithLink, urlParams, linkPath }) => {
  const uniqueIDTR = useId();
  const uniqueIDTHLink = useId();
  const uniqueHeader = useId();
  return (
    <TableWrapper>
      <TableEl>
        <THead>
          <THeadRow>
            {headers.map((header, index) => {
              return <TheadData key={uniqueHeader + index}>{header}</TheadData>;
            })}
          </THeadRow>
        </THead>
        <TBody>
          {data.map((data, index) => {
            return (
              <TBodyRow key={(uniqueIDTR, index)}>
                {Object.keys(headers).map((header, index) => {
                  const atribute = headers[index].toLowerCase();
                  return (
                    <>
                      {atribute === columnWithLink && (
                        <TBodyData>
                          <TableRowLink>
                            <Link
                              key={uniqueIDTHLink + data[atribute]}
                              to={`${linkPath}${data[urlParams]}`}
                              state={{ stateData: data[urlParams] }}
                            >
                              {data[atribute]}
                            </Link>
                          </TableRowLink>
                        </TBodyData>
                      )}

                      {atribute !== columnWithLink && (
                        <TBodyData>{data[atribute]}</TBodyData>
                      )}
                    </>
                  );
                })}
              </TBodyRow>
            );
          })}
        </TBody>
      </TableEl>
    </TableWrapper>
  );
};

export default Table;
