import { Link } from "react-router-dom"
import { SideBar } from "../Components/SideBar"

export const HeaderPage = () => {
  return (
    <>
      {/* <header>
        <nav>
          <Link to="/">
            Login
          </Link>
          <Link to="/welcome">
            Welcome
          </Link>
          <Link to="/property">
            Property
          </Link>
        </nav>
      </header> */}
      <SideBar/>
    </>
  )
}