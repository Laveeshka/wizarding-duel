import styled from "styled-components";

export const StyledCharacterScore = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin-bottom: 4rem;

  .total-points-container {
    width: 100px;
    padding: 1rem 1.25rem;

    background: #44305f;
    height: auto;
    position: relative;
    margin: 0 auto;
    border: 1px solid #d8dbe2;
    border-bottom: 0;
    border-radius: 0.125rem;
    z-index: 2;

    &::before {
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-top: 25px solid #d8dbe2;
      bottom: -24px;

      content: "";
      width: 0;
      height: 0;
      position: absolute;
      left: -1px;
    }

    &::after {
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-top: 25px solid #44305f;
      bottom: -22px;

      content: "";
      width: 0;
      height: 0;
      position: absolute;
      left: 0;
    }

    div {
        text-align: center;
        verticle-align: middle;
        font-size: 2.5rem;
    }
  }

  .spell-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #44305f;
    padding: 0.5rem 1rem;
    gap: 0;
    border-radius: 0 0.5rem 0.5rem 0;

    p {
        margin: 0;
        font-size: 1.2rem;
    }
  }

`;

    // border-top: 1px solid #d8dbe2;
    // border-right: 1px solid #d8dbe2;
    // border-bottom: 1px solid #d8dbe2;
