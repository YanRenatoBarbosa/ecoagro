import styled from "styled-components";

export const ResultadosMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem 8px;
  text-align: center;

  > div {
    margin-bottom: 1.65rem;

    h2 {
      margin-bottom: .75rem;
    }
  
    &.btns {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      a {
        background-color: ${({theme}) => theme.mainColor};
        color: white;
        padding: 0.4rem 0.8rem;
        border-radius: 0.75rem;
      }
    }
  }

  .CardResults {
    width: 10.938rem;
    height: 14.688rem;
    box-shadow: 0px 0px 5px silver;
    
    div {
      height: 50%;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &.good {
        color: ${({theme}) => theme.mainColor};
        padding-bottom: 1rem;
      }

      &.bad {
        color: red;
        padding-bottom: 1rem;
      }
    }

    .CardResults-top .media {
      padding-top: 1rem;
      font-size: 1.5rem;
      opacity: 85%;
    }
    
    .CardResults-top .legenda {
      color: ${({theme}) => theme.mainColor};
      font-size: 0.85rem;
      padding: 0 1rem;
    }
  }
`;
