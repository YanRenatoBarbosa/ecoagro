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
      color: ${({theme}) => theme.secundaryTextColor};
      border-radius: 12px;
      background: #066d48;
      margin-top: 8px;

      &.invisible {
        display: none;
      }
    }
  }

  @media screen and (min-width: 800px) {
    padding: 1.75rem 20% 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
      width: 50%;
    }
  }
`;
