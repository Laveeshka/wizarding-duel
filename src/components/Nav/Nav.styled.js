import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledNav = styled.nav`
  width: 100%;
  height: 3.5rem;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  position: sticky;

  .logo {
    right: 1rem;
    align-self: center;
    padding: 1rem 0;

    @media (max-width: ${({ theme }) => theme.tablet}){
      display: none;
    }
  }
`;
