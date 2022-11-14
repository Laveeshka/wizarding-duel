import styled from "styled-components";
import outcomeMask from "../../images/outcome_mask.svg";

export const StyledRoundsContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;

  h2 {
    text-align: center;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.tertiaryTextColour};
  }

  .spells-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

    media (max-width: ${({ theme }) => theme.tablet}){
      gap: 1rem;
    }
  }

  button {
    width: fit-content;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    border-radius: 1rem;
    border: none;
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

.outcome-container {
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 2rem;
    width: 70%;
    height: auto;
    background-color: ${({ theme }) => theme.primaryColourLight};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
    padding: 2rem;
    text-align: center;
    -webkit-mask-image: url("${outcomeMask}");
    -webkit-mask-size: cover;

    h1 {
      font-size: 1.7rem;
    }

    @media (max-width: ${({ theme }) => theme.tablet}) {
      -webkit-mask-image: none;
      border-radius: 2rem;
    }

}

.toast-message {
  background: ${({ theme }) => theme.toastMessageColour};
  color: #312244;
  font-size: 1rem;
  padding: 0.5rem 0.8rem;
}

`;
