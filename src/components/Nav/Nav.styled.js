import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledNav = styled.nav`
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.darkNavBackground};
`;

// .logo {
//   right: 1rem;
//   align-self: center;
//   padding: 1rem 0;

//   @media (max-width: ${({ theme }) => theme.tablet}){
//     display: none;
//   }
// }
