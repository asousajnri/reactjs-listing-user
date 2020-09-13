import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  label {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: var(--light);
    line-height: 1;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  border: 2px solid var(--secondary-color);
  align-items: center;
  border-radius: 0.7rem;
  height: 4.5rem;
  background: var(--dark);
  padding: 0 1rem;

  input {
    background: transparent;
    border: none;
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--light);
    width: 100%;
    padding: 0 1rem;
  }
`;