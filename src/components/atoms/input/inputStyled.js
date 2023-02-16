import styled from "styled-components";

export const InputWrapper = styled.div`
  color: ${(props) => props.theme.text.gray};
  display: grid;
  line-height: 2rem;
  width: 100%;

  > label {
    text-transform: capitalize;
    font-size: 0.9rem;
    font-weight: 600;
  }

  > input {
    border: none;
    outline: 1px solid ${(props) => props.theme.border.gray};
    padding: 10px;
    border-radius: 7px;
    /* width: ${(props) => props.width}; */
  }

  > select {
    border-radius: 7px;
    height: 35px;
    padding: 0 10px;
    outline: 1px solid ${(props) => props.theme.border.gray};

    &:focus {
      border: none;
    }

    > options {
      text-transform: capitalize;
    }
  }
`;
