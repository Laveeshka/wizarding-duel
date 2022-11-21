import styled from "styled-components";

export const StyledDueller = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  div.text-italic {
    font-style: italic;
  }

  div.dueller-name {
    font-size: 1.4rem;
    font-weight: 800;
    color: ${({ theme }) => theme.tertiaryTextColour};
  }
`;
