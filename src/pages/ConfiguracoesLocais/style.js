import styled from "styled-components";

export const StyledConfiguracoesLocais = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  text-align: center;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 1.3rem;

    button {
      height: 2.5rem;
      width: 9.75rem;
      font-size: 20px;
      color: ${({theme}) => theme.secundaryTextColor};
      border-radius: 12px;
      background: #066d48;
      margin-top: 8px;
    }
  }

  @media screen and (min-width: 800px) {
    padding: 1.75rem 20% 0;

    form {
      width: 50%;
    }
  }
`;