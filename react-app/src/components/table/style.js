import styled from "styled-components";

export const TableWrapper = styled.div`
  margin: 20px 70px 70px;
  box-shadow: 0px 35px 50px ${(props) => props.theme.shadow};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: space-evenly;
  user-select: none;
`;

export const TableEl = styled.table`
  width: 90%;
  border-collapse: collapse;
  border: 15px solid ${(props) => props.theme.shadow};
  margin: 10px;
`;
export const THead = styled.thead`
  background: ${(props) => props.theme.tableHead};
`;

export const TheadData = styled.th`
  color: ${(props) => props.theme.tableHeadText};
  font-weight: 900;
  padding: 10px;
`;
export const THeadRow = styled.tr`
  padding: 10px;
`;
export const TBody = styled.tbody`
  padding: 10px;
`;
export const TBodyRow = styled.tr`
  padding: 10px;
`;
export const TBodyData = styled.td`
  border: 1px solid ${(props) => props.theme.shadow};
  padding: 10px;
  font-weight: 900;
`;
export const TableRowLink = styled.span`
  > * {
    color: ${(props) => props.theme.link};
    text-decoration: none;
    font-weight: 900;
    cursor: pointer;
  }
`;
