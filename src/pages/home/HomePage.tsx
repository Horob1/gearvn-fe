import { Carousel } from "./components/Carousel.tsx"
import { Navbar } from "./components/Navbar.tsx"
import ProducList from "./components/ProducList.tsx"


const HomePage = () => {
  return (
    <div className="m-auto xl:max-w-[1220px] lg:max-w-[1000px] md:max-w-[100%] p-4">
      <div className="grid grid-cols-12 gap-3">
        <div className="hidden md:block md:col-span-2 z-20">
          <Navbar/>
        </div>
        <div className="col-span-12 md:col-span-10 z-10">
          <Carousel></Carousel>
        </div>
        
      </div>
    <ProducList/>
    <ProducList/>
    <ProducList/>
    </div>
  )
}

export default HomePage
