import styled from "styled-components";

export const StyleCardPlantacao = styled.div`
  width: 100%;
  height: 4.0625rem;
  display: flex;
  align-items: center;
  padding: 0 1rem 0 0;
  border: 1px solid black;
  border-radius: 15px;
  margin-bottom: 0.65rem;

  .plantacao {
    height: 100%;
    display: flex;
    align-items: center;
    flex-grow: 1;

    span {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.mainColor};
      margin: 0 1rem;
    }

    .infos {
      text-align: left;

      h3 {
        font-weight: 500;
        font-size: 17px;
        margin-bottom: 0.25rem;
      }
      
      p {
        opacity: 85%;
      }
    }
  }

  .btnRemove span {
    font-size: 1.85rem;
    opacity: 85%;
  }

  @media screen and (min-width: 425px) {
    max-width: 23rem;
  }

  @media screen and (min-width: 800px) {
    width: 9rem;
    height: 13rem;
    box-shadow: 0px 2px 4px 0px #00000040;
    border: 1px solid silver;
    border-radius: 4px;
    padding: 0;

    margin-right: 1rem;
    
    flex-direction: column;
    align-items: center;
    
    .plantacao {
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: top;

      .infos {
        text-align: center;
        height: 75%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding-top: 1rem;
        font-family: Poppins;

        h3 {
          font-size: 24px;          
          font-weight: 400;
        }
        
        p {
          box-sizing: border-box;
          padding: 0 20%;

          font-size: 1rem;
          font-weight: 400;
          line-height: 24px;
        }
      }

      .iconeFolha {
        display: none;
      }
    }

    .btnRemove {
      display: flex;
      align-items: center;
      color: #00000091;
      border-radius: 100%;
      margin-bottom: .5rem;
      opacity: 0%;
      transition: ease .3s;
    }
    
    
    .btnRemove:hover {
      color: #000000d6;
    }
    
    .plantacao:hover, .btnRemove span:hover {
      cursor: pointer;
    }
    
    
    :hover {
      cursor: pointer;
      box-shadow: 0px 2px 4px 0px #00000082;

      .btnRemove {
        opacity: 100%;
      }
    }
  }
`;
