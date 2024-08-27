import { HeaderPage } from "./Header"
import { FooterPage } from "./FooterPage"
import { RoutesMain } from '../routes/RoutesMain'

export const DefaultPage = () => {
  return (
    <>
      <HeaderPage/>
      <RoutesMain/>
      <FooterPage/>
    </>
  )
}