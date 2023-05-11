import { Outlet } from 'react-router-dom'
import { DefaultContainer } from './styles'
import { Header } from '../../components/Header'

export function DefaultLayout() {
  return (
    <DefaultContainer>
      <Header />
      <Outlet />
    </DefaultContainer>
  )
}
