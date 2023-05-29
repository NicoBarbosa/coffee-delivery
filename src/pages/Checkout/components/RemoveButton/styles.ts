import styled from 'styled-components'

export const RemoveButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  background: ${(props) => props.theme['base-button']};
  border: 0;
  border-radius: 6px;
  padding: 0 0.5rem;
  font-size: 1rem;
  color: ${(props) => props.theme.purple};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.2rem;
  cursor: pointer;
  transition: 0.2s background ease-in-out;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  span {
    font-size: 0.75rem;
    color: ${(props) => props.theme['base-text']};
  }
`
