import styled from "styled-components";

export const StyleHomePage = styled.main`
  padding: 1.5rem 1rem 0;
  text-align: center;

  .container-plantacoes {
    width: 100%;
    margin: 0.75rem 0 2rem;

    .btnAddPlantacoes {
      width: fit-content;
      margin: 1rem auto 0;
      padding: 0.5rem 1.5rem;
      border-radius: 10px;
      background: ${({theme}) => theme.mainColor};

      color: white;
      font-size: 18px;
      font-weight: 500;
    }
      
  }

  .tituloInfos {
    margin-bottom: 1rem;
  }

  .container-links {
    display: flex;
    justify-content: space-around;
  }
`;
