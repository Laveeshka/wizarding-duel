import styled from "styled-components";
import ornamentalBorder from "./../../images/ornamental_border.svg";

export const StyledCharacterCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 25rem;
    height: 25rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: ${({ isClicked}) => 
        {
            if (isClicked){
                return ({ theme }) => theme.secondaryColourLight;
            }
            else {
                return ({ theme }) => theme.secondaryColour;
            }
        }};
    box-shadow: inset 0 -6px 0 ${({ theme }) => theme.secondaryColourDark};
    position: relative;
    overflow: hidden;
    border: ${({ isClicked, theme }) => {
        if (isClicked ){
            return theme.cardBorder;
        }
        else {
            return "none";
        }
    }};
    transform: ${({ isClicked }) => isClicked? "translateY(-0.5rem)" : "translateY(0)"};
    transition: transform 0.3s, background-color: 0.3s, border 0.3s;

    &::before {
        content: "";
        position: absolute;
        top: 0.5rem;
        left: 0.5rem;
        background: url("${ornamentalBorder}") no-repeat center center/cover;
        background-size: contain;
        height: calc(100% - 1rem);
        width: calc(100% - 1rem);
    }

    &:hover {
        background-color: ${({ theme }) => theme.secondaryColourLight};
        transform: translateY(-0.5rem);
    }

    img {
        width: 14rem;
        height: 14rem;
        object-fit: fill;
        overflow: hidden;
        border-radius: 50%;
    }

    h3 {
        margin: 0;
        padding-top: 1rem;
        font-size: 1.5rem;
    }

    div {
        background-color: ${({ house, theme }) => {
            switch (house) {
                case "Gryffindor":
                    return theme.gryffindorColour;
                case "Ravenclaw":
                    return theme.ravenclawColour;
                case "Hufflepuff":
                    return theme.hufflepuffColour;
                case "Slytherin":
                    return theme.slytherinColour;
                default:
                    return theme.defaultHouseColour;
            }
        }};
        position: absolute;
        top: -6rem;
        left: -6rem;
        width: 12rem;
        height: 12rem;
        transform: rotate(45deg);
        display: flex;
        justify-content: flex-end;
        align-items: center;

        h2 {
            font-size: 1.75rem;
            line-height: 2rem;
            transform: rotate(-45deg);
            margin-right: 2rem;
        }
    }

    span {
        display: none;
    }
`;

