import styled from "styled-components";

export const StyledChosenCharacters = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-around;

  @media (max-width: ${({ theme }) => theme.tablet}) {
    justify-content: center;
  }
`;
