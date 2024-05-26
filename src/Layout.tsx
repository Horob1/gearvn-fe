import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.tsx";
import TopBanner from "./components/TopBanner.tsx";
import Header from "./components/Header.tsx";
import BottomNavigator from "./components/BottomNavigator.tsx";
import LiveChatComponent from "./components/LiveChat/LiveChatComponent.tsx";
const Layout = () => {

  return (
    <main className="bg-[#ECECEC]">
      <TopBanner />
      <Header />
      <Outlet />
      <Footer />
      <LiveChatComponent />
      <BottomNavigator />
    </main>
  );
};

export default Layout;
