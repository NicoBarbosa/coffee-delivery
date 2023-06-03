import styled from 'styled-components'

export const CartContainer = styled.main`
  margin: 9rem auto 0;
  max-width: 70rem;
  display: flex;
  gap: 2rem;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.4625rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

const BoxStyleContainer = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  padding: 2.5rem;
`

export const AdressContainer = styled(BoxStyleContainer)`
  margin-top: 0.9375rem;

  div {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    gap: 1rem;

    input {
      padding: 0.75rem;
      border: 1px solid ${(props) => props.theme['base-button']};
      border-radius: 4px;
      background: ${(props) => props.theme['base-input']};
      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;
      line-height: 1.1375rem;
      color: ${(props) => props.theme['base-text']};
      font-weight: 400;

      &:nth-child(1) {
        width: 12.5rem;
      }
    }

    span {
      display: flex;
      gap: 0.75rem;

      input:last-child {
        flex-grow: 1;
      }

      &:last-child {
        display: grid;
        gap: 0.75rem;
        grid-template-columns: 1fr 1.38fr 3.75rem;
      }
    }
  }
`

const HeaderTitleContainer = styled.header`
  display: flex;
  gap: 0.5rem;

  span {
    font-family: 'Roboto', sans-serif;

    h3 {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.3rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    strong {
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 1.1375rem;
      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const HeaderAdressContainer = styled(HeaderTitleContainer)`
  i {
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 1.375rem;
  }
`

export const HeaderPaymentContainer = styled(HeaderTitleContainer)`
  i {
    color: ${(props) => props.theme.purple};
    font-size: 1.375rem;
  }
`

export const PaymentContainer = styled(BoxStyleContainer)`
  margin-top: 0.75rem;
`

export const PaymentOptions = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.75rem;

  label {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid transparent;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme.purple};
    font-size: 1rem;
    cursor: pointer;
    transition: 0.2s background ease-out;
  }

  span {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Roboto', sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.2rem;
  }

  input[type='radio'] {
    display: none;

    &:hover + label {
      background: ${(props) => props.theme['base-hover']};
    }

    &:checked + label {
      background: ${(props) => props.theme['purple-light']};
      border: 1px solid ${(props) => props.theme.purple};
    }
  }
`

export const CoffessSelectedContainer = styled(BoxStyleContainer)`
  border-radius: 6px 44px;
  margin-top: 0.9375rem;

  footer {
    margin-top: 1.5rem;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 0.875rem;
      color: #fff;
      background: ${(props) => props.theme.yellow};
      border: 0;
      border-radius: 6px;
      padding: 0.75rem 0.5rem;
      margin-top: 1.5rem;
      cursor: pointer;
      transition: 0.2s background ease-out;

      &:not(:disabled)hover {
        background: ${(props) => props.theme['yellow-dark']};
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }
  }
`

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    span {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.1375rem;
      color: ${(props) => props.theme['base-text']};
    }

    strong {
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.625rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    &:last-child {
      text-align: right;
    }
  }
`

export const ItemCartEmpty = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3.06rem 2.5rem;
  line-height: 0;
  border-bottom: 1px solid;
  border-bottom-color: ${(props) => props.theme['base-button']};
  font-weight: 700;
  color: ${(props) => props.theme['base-text']};
  font-size: 0.875rem;
`
