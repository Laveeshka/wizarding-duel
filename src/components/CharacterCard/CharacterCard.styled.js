import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledCharacterCard = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    padding: 0.5rem;
    border-radius: 1rem;
    border: ${({ theme }) => theme.primaryBorder};

    img{
        width: 100%;
        height: 15rem;
        object-fit: fill;
        overflow: hidden;
        border-radius: 1rem;
    }
`;