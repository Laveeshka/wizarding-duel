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
            color: ${({ theme }) => theme.accentText};
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

        div.dueller {
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
                color: ${({ theme }) => theme.accentText};
            }
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
            background-color: ${({ theme }) => theme.buttonAccentColor};
            color: ${({ theme }) => theme.buttonAccentTextColor};
            box-shadow: 0 0.4rem ${({ theme }) => theme.buttonAccentBoxShadowColor};
            cursor: pointer;
            position: relative;

            &:hover{
                top: 2px;
                box-shadow: 0 0.2rem ${({ theme }) => theme.buttonAccentBoxShadowColor};
            }

            &:active{
                top: 4px;
                box-shadow: 0 0 ${({ theme }) => theme.buttonAccentBoxShadowColor};
            }
        }

        button {
            background-color: transparent;
            border: none;
            color: ${({ theme }) => theme.primaryText};
            font-family: ${({ theme }) => theme.fontFamily};
            font-size: 1.1rem;
            text-decoration: underline;
            cursor: pointer;
        }
    }
    }
`;
