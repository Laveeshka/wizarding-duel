import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.buttonAccentColor};
  color: ${({ theme }) => theme.buttonAccentTextColor};
  box-shadow: 0 0.4rem ${({ theme }) => theme.buttonAccentBoxShadowColor};
  cursor: pointer;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%) translateY(-30%);

  &:hover {
    transform: translateX(-50%) translateY(-32%);
    box-shadow: 0 0.2rem ${({ theme }) => theme.buttonAccentBoxShadowColor};
  }

  &:active {
    transform: translateX(-50%) translateY(-35%);
    box-shadow: 0 0 ${({ theme }) => theme.buttonAccentBoxShadowColor};
  }
`;
