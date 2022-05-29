import styled from "styled-components";

export const DivAccent = styled.div`
  margin: 20px 70px 70px;
  box-shadow: 0px 35px 50px ${(props) => props.theme.shadow};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  user-select: none;
`;
