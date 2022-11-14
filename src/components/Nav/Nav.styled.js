import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.darkNavBackground};
`;
