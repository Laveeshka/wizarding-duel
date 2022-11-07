import styled from "styled-components";

export const StyledSaveDuelForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    .form-btn {
        margin-top: 1rem;
        background-color: #d8dbe2;
        box-shadow: 0 0.4rem #7e88a0;
        padding: 0.4rem 1rem;
        font-size: 0.8rem;
    }

    input {
        background-color: #aa92c8;
        color: #44305f;
        outline: 1px solid #312244;
        border: none;
        padding: 0.5rem 0.3rem;
        border-radius: 0.2rem;
        width: 100%;
    }

  }

`;
