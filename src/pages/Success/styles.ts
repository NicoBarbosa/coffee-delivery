import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 10rem;
`

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 11.5rem;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    color: ${(props) => props.theme['yellow-dark']};
    line-height: 2.6rem;
  }

  span {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.625rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const SummaryContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2.5rem;
  gap: 6.375rem;
`

export const Summary = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  gap: 2rem;
  padding: 2.5rem 8.15rem 2.5rem 2.5rem;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 6px 36px;
    border: 1px solid transparent;
    background: linear-gradient(280deg, #8047f8, #dbac2c) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
  }
`

export const SummaryPinsInformations = styled.span`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  font-weight: 400;
  line-height: 1.3rem;
  color: ${(props) => props.theme['base-text']};

  i {
    width: 2rem;
    height: 2rem;
    border-radius: 999px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.background};
  }

  .mapPin {
    background: ${(props) => props.theme.purple};
  }
  .timerPin {
    background: ${(props) => props.theme.yellow};
  }
  .dollarPin {
    background: ${(props) => props.theme['yellow-dark']};
  }

  span {
    display: flex;
    flex-direction: column;
  }
`

export const City = styled.span`
  display: block;
`
