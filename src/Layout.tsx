import { Outlet } from "react-router-dom"
import Footer from "./components/Footer.tsx"
import TopBanner from "./components/TopBanner.tsx"
import Header from "./components/Header.tsx"


const Layout = () => {
  return (
    <main className="">
    <TopBanner/>
    <Header/>
    <Outlet/>
    <Footer/>
    </main>
  )
}

export default Layout
