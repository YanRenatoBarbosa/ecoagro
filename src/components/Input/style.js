import styled from "styled-components";
// height: 5.125rem;

export const ContainerInputs = styled.div`
  width: 100%;
  height: 3.563rem;
  margin-bottom: 2.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  
  position: relative;

  label {
    position: absolute;
    top: 12px;
    left: 1.5rem;
    font-size: 1.375rem;
    font-weight: 500;
    color: #00000080;
    pointer-events: none;
    transition: all .5s;

    &.small {
      top: -0.8rem;
      font-size: 1rem;
      color: #000000b4;
      background: ${({theme}) => theme.corBgBody};
      padding-right: 2px;
    }
    
    &.wrong {
      top: -0.8rem;
      font-size: 1rem;
      color: red;
      background: ${({theme}) => theme.corBgBody};
      padding-right: 2px;
    }

    &.colorido {
      color: ${({theme}) => theme.corPrincipal};
    }
  }

  input {
    width: 100%;
    height: 100%;
    font-size: 1.375rem;
    padding: 0 1.5rem;
    border: 1px solid black;
    border-radius: 10px;

    &.wrong {
      border: 2px solid #ff0000b4;
    }
  }

  input:focus {
    border: 2px solid ${({theme}) => theme.corPrincipal};
  }

  span {
    position: absolute;
    bottom: -1.563rem;
    left: 1.5rem;
    font-size: 0.875rem;
    font-weight: 500;
    color: #000000b4;

    &.wrong {
      color: red;
    }
  }
`;
