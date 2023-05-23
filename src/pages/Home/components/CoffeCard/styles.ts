import styled from 'styled-components'

export const CatalogCardContainer = styled.div`
  max-width: 16rem;
  background: ${(props) => props.theme['base-card']};

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 6px 36px;

  img {
    width: 7.5rem;
    margin-top: calc(0px - 20px);
  }

  h3 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 1rem;
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.1375rem;
    text-align: center;
    color: ${(props) => props.theme['base-label']};
    margin: 0.5rem 1.25rem 0;
  }
`

export const AttributeContainer = styled.div`
  margin-top: 0.75rem;
  display: flex;
  gap: 0.25rem;
`

export const AttributeTag = styled.span`
  color: ${(props) => props.theme['yellow-dark']};
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 0.8125rem;
  padding: 0.25rem 0.5rem;
`

export const BuyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4375rem;
  margin: 2.0625rem 0 1.25rem;

  strong {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.95rem;
    color: ${(props) => props.theme['base-text']};

    &::before {
      content: 'R$';
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.1375rem;
      margin-right: 0.2rem;
    }
  }
`

export const ActionsBox = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const AddCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  font-size: 1.375rem;
  color: ${(props) => props.theme['base-card']};
  background: ${(props) => props.theme['purple-dark']};
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s background ease-in;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
