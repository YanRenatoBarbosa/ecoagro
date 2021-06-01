import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  div {
    display: flex;
  }

  button {
    margin-right: .9rem;

    img {
      height: 1.5rem;
    }
  }

  h1 {
    font-size: 1.25rem;
    font-weight: 400;
  }

  a, a img {
    height: 2.5rem;
  }
`;
