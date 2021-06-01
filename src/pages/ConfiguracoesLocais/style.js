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
      height: 40px;
      width: 156px;
      font-size: 20px;
      color: ${({theme}) => theme.corTextoInside};
      border-radius: 12px;
      background: #066d48;
      margin-top: 8px;
    }
  }
`;