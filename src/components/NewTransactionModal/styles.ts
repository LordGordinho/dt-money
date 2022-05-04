import styled from "styled-components";
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background-color: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    & + input {
      margin-top: 1rem;
    }

    &::placeholder {
      color: var(--text-body);
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 0;
    color: #FFF;
    font-weight: 700;
    font-size: 1.2rem;
    margin-top: 1rem;

    background-color: var(--green);

    transition: filter .2s;

    &:hover{
      filter: brightness(0.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0.5rem;

  margin: 1rem 0;
`

interface RadioButtonProps {
  isActive: boolean
  colorRadioButton: 'red' | 'green'
}

const selectColorButton = {
  'red': '#E62E4D',
  'green': '#33CC95'
}

export const RadioButton = styled.button<RadioButtonProps>`
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background-color: ${(props) => props.isActive ? transparentize(0.9, selectColorButton[props.colorRadioButton]) : 'trasparent' };

    transition: border .2s;

    &:hover{
      border: 1px solid ${darken(0.2,  "#d7d7d7")};
    }

    img {
      height: 2rem;
      width: 2rem;
    }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }
`