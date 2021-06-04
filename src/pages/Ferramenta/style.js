import styled from "styled-components";

export const StyledFerramenta = styled.main`
  padding: 0 1rem 2.5rem;
  text-align: center;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;

    button {
      height: 2.5rem;
      width: 14rem;
      font-size: 20px;
      color: ${({theme}) => theme.corTextoInside};
      border-radius: 12px;
      background: #066d48;
      margin-top: 8px;

      &.invisible {
        display: none;
      }
    }
  }
`;
