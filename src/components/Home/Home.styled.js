import styled from "styled-components";

export const StyledHome = styled.div`
    margin: auto 0;

    header {
        width: 100%;
        margin-right: 0;
        margin-left: 0;
        padding: 1.5rem 10vw;

        h2 {
            text-align: center;
            font-size: 2rem;
            color: ${({ theme }) => theme.tertiaryTextColour};
        }
        h3 {
            text-align: center;
            font-size: 1.5rem;
        }

        div.dueller-container {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
            margin-bottom: 1.5rem;
        }

        div.button-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }

        a {
            text-decoration: none;
            font-size: 1.4rem;
            font-weight: 600;
            padding: 0.5rem 1.2rem;
            border-radius: 1rem;
            background-color: ${({ theme }) => theme.tertiaryColour};
            color: ${({ theme }) => theme.tertiaryButtonTextColour};
            box-shadow: 0 0.4rem ${({ theme }) => theme.tertiaryButtonShadowColour};
            cursor: pointer;
            position: relative;

            &:hover{
                top: 2px;
                box-shadow: 0 0.2rem ${({ theme }) => theme.tertiaryButtonShadowColour};
            }

            &:active{
                top: 4px;
                box-shadow: 0 0 ${({ theme }) => theme.tertiaryButtonShadowColour};
            }
        }

        button {
            background-color: transparent;
            border: none;
            color: ${({ theme }) => theme.primaryTextColour};
            font-family: ${({ theme }) => theme.fontFamily};
            font-size: 1.1rem;
            text-decoration: underline;
            cursor: pointer;
        }
    }
    }
`;
