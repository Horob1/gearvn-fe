import { Outlet } from "react-router-dom"
import Footer from "./components/Footer.tsx"
import TopBanner from "./components/TopBanner.tsx"
import Header from "./components/Header.tsx"
import BottomNavigator from "./components/BottomNavigator.tsx"


const Layout = () => {
  return (
    <main className="bg-[#ECECEC]">
    <TopBanner/>
    <Header/>
    <Outlet/>
    <Footer/>
    <BottomNavigator/>
    </main>
  )
}

export default Layout
