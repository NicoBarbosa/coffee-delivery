import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  margin: 5rem 10rem 0;
  padding: 5.875rem 0;
`

export const AdvertisingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3.5rem;
`

export const TitleContainer = styled.div`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 3.9rem;
    color: ${(props) => props.theme['base-title']};
  }

  h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 1rem;
  }
`

export const ListContainer = styled.div`
  margin-top: 4.125rem;
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    &:first-child {
      margin-right: 2.5rem;
    }

    li {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      line-height: 1.3rem;
      font-size: 1rem;

      span {
        color: ${(props) => props.theme['base-text']};
      }

      i {
        display: flex;
        border-radius: 999px;
        padding: 0.5rem;
        color: #fff;
      }

      .cart {
        background: ${(props) => props.theme['yellow-dark']};
      }
      .timer {
        background: ${(props) => props.theme.yellow};
      }
      .package {
        background: ${(props) => props.theme['base-text']};
      }
      .coffee {
        background: ${(props) => props.theme.purple};
      }
    }
  }
`

export const CoffeeTitles = styled.h2`
  margin-top: 8rem;
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 2rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ListCardContainer = styled.div`
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
`
