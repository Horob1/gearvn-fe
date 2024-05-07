import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"

const Layout = () => {
  return (
    <>
    {/* header */}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
