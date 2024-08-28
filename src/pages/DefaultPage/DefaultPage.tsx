import { HeaderPage } from "../Header"
import { FooterPage } from "../FooterPage/FooterPage"
import { RoutesMain } from '../../routes/RoutesMain'
import './styles.css'

export const DefaultPage = () => {
  return (
    <>
      <HeaderPage />
      <div className='mainContent'>
        <RoutesMain/>
      </div>
      <FooterPage/>
    </>
  )
}