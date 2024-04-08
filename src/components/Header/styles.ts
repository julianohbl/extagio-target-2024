import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 2rem;
    height: 2rem;
  }

  nav {
    width:100%;
    display: flex;
    justify-content: space-around;
    gap: 1rem;

    a {
      text-decoration: none;
      border-top: 8px solid transparent;
      border-bottom: 8px solid transparent;

      font-size: 1.125rem;
      font-weight: bold;

      &:hover {
        border-bottom: 3px solid red;
      }

      &.active {
        border-bottom: 3px solid red;
        color: red;
      }
    }
  }

  @media screen and (max-width: 600px) {
    img {
      display: none;
    }

    nav {
      gap: 0.125rem;
      a {
        font-size: 1rem;
        text-align: center;
      }
    }
  }
`;
