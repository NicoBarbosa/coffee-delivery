import styled from 'styled-components'

export const AmountButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;
  padding: 0.5rem;
  background: ${(props) => props.theme['base-button']};

  button {
    display: flex;
    border: 0;
    background: none;
    color: ${(props) => props.theme.purple};
    font-size: 0.875rem;
    cursor: pointer;
    padding: 0;
    transition: 0.1s color ease-in;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3rem;
    color: ${(props) => props.theme['base-title']};
  }
`
