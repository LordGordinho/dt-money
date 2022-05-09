import styled from "styled-components";

export const Container = styled.tr`
    td {
    padding: 1rem 2rem;
    border: 0;
    background-color: var(--shape);
    border-radius: 0.25rem;

    &:first-child{
      color: var(--text-title);
    }

    &.withdraw{
      color: var(--red);
    }

    &.deposit{
      color: var(--green);
    }
  }
`