import styled from "styled-components";

export const HeaderMain = styled.header`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadowHeader};
  background: ${({ theme }) => theme.headerBg};
  position: relative;

  .menu {
    height: 2.5rem;
    position: absolute;
    left: 5%;

    span {
      font-size: 2.5rem;
    }
  }

  .desktopOptions {
    display: none;
  }

  section {
    display: none;

    height: 100vh;
    width: 100vw;
    z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(0 0 0 / 0.4);

    &.visible {
      display: initial;
    }

    .hiddenOptions {
      height: 100%;
      width: 80%;
      background: ${({ theme }) => theme.headerBg};
    }
  }

  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.mainColor};
  }

  @media screen and (min-width: 800px) {
    padding: 0 10%;
    justify-content: space-between;
    flex-direction: row-reverse;

    .menu {
      position: unset;
    }

    .desktopOptions {
      display: initial;
      width: 40%;

      a {
        margin-right: 1rem;
      }
    }
  }
`;

export const HeaderSession = styled.header`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  div {
    display: flex;
  }

  button {
    margin-right: 0.9rem;

    span {
      font-size: 1.5rem;
    }
  }

  h1 {
    font-size: 1.25rem;
    font-weight: 400;
  }

  a {
    height: 2.5rem;

    span {
      font-size: 2.5rem;
    }
  }
`;
