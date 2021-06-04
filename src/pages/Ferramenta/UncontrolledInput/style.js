import styled from "styled-components";

export const StyledContainerInput = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 1rem;
  
  p {
    font-size: 1.125rem;
    margin: 0 0 0.75rem 1rem;
  }

  .wrapper {
    position: relative;
    height: 3.438rem;
   
    label {
      position: absolute;
      top: 0.688rem;
      left: 1.25rem;
      font-size: 1.375rem;
      font-weight: 500;
      color: #11111194;
      pointer-events: none;
      transition: all .3s;

      &.small {
        font-size: 1rem;
        top: -0.813rem;
        padding-right: 2px;
        background: ${({theme}) => theme.corBgBody};
      }

      &.colorido {
        color: ${({theme}) => theme.corPrincipal};
      }
    }

    input {
      height: 100%;
      width: 100%;
      border-radius: 10px;
      padding-left: 1.563rem;
      font-size: 1.375rem;
      border: 2px solid rgb(0, 0, 0, 0.5);
    }

    input:focus {
      border: 2px solid ${({theme}) => theme.corPrincipal};
    }
  }

  .btns-container {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-around;

    &.invisible {
      display: none;
    }

    button {
      height: 1.563rem;
      width: 5.313rem;
      border-radius: 10px;
      border: 1px solid black;
      font-size: 1rem;

      color: ${({theme}) => theme.corTexto};
      background-color: transparent;

      &.selected {
        color: ${({theme}) => theme.corTextoInside};
        background-color: ${({theme}) => theme.corPrincipal};
      }
    }
  }
  
`;
