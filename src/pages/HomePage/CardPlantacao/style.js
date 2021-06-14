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
`;
