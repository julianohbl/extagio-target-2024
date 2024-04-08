import styled from "styled-components";

export const Exercicio02Container = styled.main`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1.125rem;

  p {
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 1rem;
  }

  input {
    height: 2.5rem;
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    margin-bottom: 2rem;

    border-bottom-left-radius: 0.25rem;
    border-top-left-radius: 0.25rem;
  }

  button {
    height: 2.5rem;
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    border: none;
    border-bottom-right-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    background-color: #0f766e;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #134e4a;
    }
  }


`;
