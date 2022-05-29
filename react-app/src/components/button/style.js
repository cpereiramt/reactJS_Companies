import styled from "styled-components";

export const ButtonEl = styled.button`
  height: fit-content;
  width: fit-content;
  padding: 10px;
  background: ${({ theme }) => theme.buttonBackground};
  color: ${({ theme }) => theme.buttonText};
  border: none;
  user-select: none;
  cursor: pointer;
  margin: 10px;
  padding: 20px;
  font-size: 1.4rem;
  &:hover {
    transform: scale(1.1);
`;
