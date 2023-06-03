import styled from 'styled-components'

export const FixedMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.background};
`

export const HeaderContainer = styled.header`
  display: flex;
  padding: 2rem 0;
  margin: 0 10rem;
  justify-content: space-between;
  align-items: center;
`

export const LocationInfoAndCart = styled.div`
  display: flex;
  gap: 0.75rem;

  span {
    display: flex;
    align-items: center;
    background: ${(props) => props.theme['purple-light']};
    gap: 0.25rem;
    padding: 0.5rem;
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 1.1375rem;
    color: ${(props) => props.theme['purple-dark']};

    border-radius: 6px;
  }
`

export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
  position: relative;

  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  cursor: pointer;

  .badge {
    position: absolute;
    display: flex;
    top: -10px;
    right: -10px;
    border-radius: 999px;
    width: 1.25rem;
    height: 1.25rem;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme['yellow-dark']};
    color: #fff;
    font-size: 0.75rem;
    font-weight: 700;
  }
`
