import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledHistory = styled.section`
  width: 100%;
  margin-right: 0;
  margin-left: 0;
  padding: 1.5rem 5vw;

  h2 {
    text-align: center;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.accentText };
  }

  div.saved-duels-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
`;
