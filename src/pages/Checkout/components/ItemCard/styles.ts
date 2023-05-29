import styled from 'styled-components'

export const ItemCardContainer = styled.aside`
  display: flex;
  gap: 1.25rem;
  background: ${(props) => props.theme['base-card']};
  padding: 1.5rem 0.25rem;
  color: ${(props) => props.theme['base-subtitle']};
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  img {
    width: 4rem;
  }
`

export const ItemActionsContainer = styled.div`
  display: flex;
  gap: 3.125rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.3rem;
  font-size: 1rem;

  strong {
    color: ${(props) => props.theme['base-text']};
    font-weight: 700;
    text-align: right;

    &::before {
      content: 'R$';
      margin-right: 0.1875rem;
    }
  }
`

export const ItemInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div {
    display: flex;
    gap: 0.5rem;
  }
`
