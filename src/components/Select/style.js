import styled from "styled-components";

import arrow_down from "../../assets/arrow_down.svg";

export const StyledSelect = styled.div`
  width: 100%;
  height: 3.563rem;
  position: relative;
  margin-bottom: 2.1rem;

  select {
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    font-size: 1.375rem;
    border: 1px solid black;
    border-radius: 10px;

    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;

    background-color: transparent;
    background-image: url(${arrow_down});
    background-size: 2.313rem;
    background-repeat: no-repeat;
    background-position: right 1rem center;

  }

  span {
    position: absolute;
    bottom: -1.563rem;
    left: 1.5rem;
    font-size: 0.875rem;
    font-weight: 400;
    color: #000000b4;
  }
`;
