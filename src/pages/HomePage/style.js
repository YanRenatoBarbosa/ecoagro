import styled from "styled-components";

export const StyleHomePage = styled.main`
  padding: 1.5rem 1rem 0;
  text-align: center;
  
  .container-plantacoes {
    width: 100%;
    margin: 0.75rem 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

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

  @media screen and (min-width: 800px) {
    padding: 2.5rem 20% 0;
    text-align: left;

    h2 {
      font-size: 1.75rem;
    }

    .container-plantacoes {
      min-height: 24vh;

      .cards-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: left;

        &.nonePlantationsInStorage {
          // mensagem avisando para adicionar plantações
        }
      }
    }

    .container-links {
      justify-content: left;
      padding-left: 2rem;

      a {
        margin-right: 1rem;
      }
    }
  }
`;
