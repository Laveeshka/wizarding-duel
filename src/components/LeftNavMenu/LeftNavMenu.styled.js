import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledLeftNavMenu = styled.nav`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    gap: 1.5rem;
    align-items: center;

    a {
        font-size: 1.5rem:
        text-transform: uppercase;
        padding: 1.5rem 0;
        font-weight: bold;
        letter-spacing: 0.4rem;
        color: ${({ theme }) => theme.primaryText};
        text-decoration: none;
        transition: color 0.3s linear;
    }

    @media (max-width: ${({ theme }) => theme.tablet}){
        flex-flow: column nowrap;
        background-color: ${({ theme }) => theme.primaryNavBackground};
        position: fixed;
        transform: ${({ open }) =>
          open ? "translateX(0)" : "translateX(-100%)"};
        top: 0;
        left: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        a {
            font-size: 1.2rem;
            text-align: center;

            &:hover {
                color: ${({ theme }) => theme.primaryTextHover}
            }
        }

    }
`;
