import styled from "styled-components";

export const Container = styled.header`
  margin-top: 4rem;
  
  table {
    border-spacing: 0 0.5rem;
    width: 100%;
    color: var(--text-body);

    th {
      padding: 1rem 2rem;
      text-align: left;
    }

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
  }
`;