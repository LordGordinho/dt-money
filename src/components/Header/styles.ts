import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue)
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 1rem 10rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    color: #FFF;
    font-size: 1rem;

    padding: 0 2rem;
    border: 0;
    border-radius: 0.25rem;
    height: 3rem;
    cursor: pointer ;
    background-color: var(--blue-ligth);

    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`;