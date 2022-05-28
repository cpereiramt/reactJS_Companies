import styled from "styled-components";

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${(props) => props.theme.accent};
  margin: auto;
  width: 100%;
  padding: 10px;
  text-align: center;
  @media (min-width: 800px) {
    height: 500px;
    background: ${(props) => props.theme.accent};
    margin: 10% auto;
    width: 50%;
  }
`;
