import styled from "styled-components";

export const StyledDuel = styled.div`
  width: 100%;
  margin-right: 0;
  margin-left: 0;
  padding: 1.5rem 5vw;

  a {
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.buttonAccentColor};
    color: ${({ theme }) => theme.buttonAccentTextColor};
    box-shadow: 0 0.4rem ${({ theme }) => theme.buttonAccentBoxShadowColor};
    cursor: pointer;
    position: relative;

    &:hover {
      top: 2px;
      box-shadow: 0 0.2rem ${({ theme }) => theme.buttonAccentBoxShadowColor};
    }

    &:active {
      top: 4px;
      box-shadow: 0 0 ${({ theme }) => theme.buttonAccentBoxShadowColor};
    }
  }
`;
