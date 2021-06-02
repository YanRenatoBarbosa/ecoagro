import styled from "styled-components";

export const StyledConfirmacaoDados = styled.section`
  width: 100%;

  h3 {
    font-size: 1rem;
    font-weight: 400;
    color: #161616;
    margin-bottom: 4px;
  }

  .container-infos {
    width: 100%;
    padding: 0 2%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    div {
      text-align: start;
      flex-grow: 1;
    }

    p {
      font-size: 1.125rem;
      margin-top: 4px;
    }
  }

  .btn-editarDados {
    height: auto;
    width: auto;
    background: none;
    margin-top: 0; 
  }

`;