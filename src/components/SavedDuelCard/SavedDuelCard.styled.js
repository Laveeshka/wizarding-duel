import styled from "styled-components";
import maskBlock from "../../images/mask_block.svg"

export const StyledSavedDuelCard = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.savedDuelCardBackgroundColor};
    padding: 5rem 2rem 3rem 2rem;
    -webkit-mask-image: url("${maskBlock}");
    -webkit-mask-size:cover;

    span.date-time {
        font-size: 0.9rem;
        text-align: center;
        background-color: ${({ theme }) => theme.savedDuelCardSpanBackgroundColor};
        color: ${({ theme }) => theme.savedDuelCardSpanTextColor};
        padding: 0.2rem 0.5rem;
        border-radius: 1rem;
    }

    h3 {
        text-align: center;
        font-weight: 800;
        font-size: 1.3rem;
    }

    div.characters-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
        justify-content: space-around;
        align-items: center;

        div.character-container {
            display: flex;
            flex-direction: column;

            div.character-img-container {
                position: relative;

                img {
                    width: 200px;
                    height: 200px;
                    border-radius: 100%;
                    border: 6px solid ${({ theme }) => theme.savedDuelCardImgColor};
                }

                span {
                    position: absolute;
                    bottom: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    text-align: center;
                    white-space: nowrap;
                    background-color: ${({ theme }) => theme.savedDuelCardImgColor};
                    padding: 0.2rem 0.5rem;
                    border-radius: 1rem;
                }
            }

            div.score {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-around;

                .points {
                    font-weight: 800;
                }
            }
        }
    }

    .feedback-container {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        gap: 1rem;
        align-items: center;

        .line {
            height: 2px;
            background-color: ${({ theme }) => theme.savedDuelCardLineColor};
        }

        small {
            text-align: center;
            font-style: italic;
        }
    }
`