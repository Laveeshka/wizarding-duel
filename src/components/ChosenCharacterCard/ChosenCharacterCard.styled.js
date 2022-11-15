import styled from "styled-components";

export const StyledChosenCharacterCard = styled.div`
    width: fit-content;
    position: relative;

    img {
      width: 200px;
      height: 200px;
      border-radius: 100%;
      border: 6px solid ${({ theme }) => theme.secondaryColourLight};
    }

    span {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      white-space: nowrap;
      background-color: ${({ theme }) => theme.secondaryColourLight};
      padding: 0.2rem 0.5rem;
      border-radius: 1rem;
    }
`;
