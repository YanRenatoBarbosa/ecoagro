import styled from "styled-components";

export const StyledStepper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.75rem 0 1.65rem ;

  .circulo {
    width: 1.875rem;
    height: 1.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #AAAAAA;
    border-radius: 100%;
    transition: all .3s;

    &.green {
      background: #066D48;

      p {
        color: white;
      }
    }

    p {
      font-size: 1.063rem;
      opacity: 70%;

      &.checked {
        display: none;
      }
    }

    img {
      display: none;
      height: 1.25rem;

      &.checked {
        display: inline-block;
      }
    }
  }

  .linha {
    height: 2px;
    width: 3.688rem;
    background: #AAAAAA;
    transition: all .3s;

    &.green {
      background: #066D48;
    }
  }
`;
