import styled from "styled-components";

export const StyledDuel = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;

  a {
    width: fit-content;
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.tertiaryColour};
    color: ${({ theme }) => theme.tertiaryButtonTextColour};
    box-shadow: 0 0.4rem ${({ theme }) => theme.tertiaryButtonShadowColour};
    cursor: pointer;
    position: relative;

    &:hover {
      top: 2px;
      box-shadow: 0 0.2rem ${({ theme }) => theme.tertiaryButtonShadowColour};
    }

    &:active {
      top: 4px;
      box-shadow: 0 0 ${({ theme }) => theme.tertiaryButtonShadowColour};
    }
  }
`;
