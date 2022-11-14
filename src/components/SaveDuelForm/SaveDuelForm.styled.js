import styled from "styled-components";

export const StyledSaveDuelForm = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    .form-btn {
        margin-top: 1rem;
        background-color: ${({ theme }) => theme.formButtonColour};
        box-shadow: 0 0.4rem ${({ theme }) => theme.formButtonShadowColour};
        padding: 0.4rem 1rem;
        font-size: 0.8rem;
    }

    input {
        background-color: ${({ theme }) => theme.formInputBackground};
        color: ${({ theme }) => theme.primaryColourLight};
        outline: 1px solid ${({ theme }) => theme.formInputOutlineColour};
        border: none;
        padding: 0.5rem 0.3rem;
        border-radius: 0.2rem;
        width: 100%;
    }

  }

`;
