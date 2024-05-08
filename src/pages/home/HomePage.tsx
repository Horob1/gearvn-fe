import { Carousel } from "./components/Carousel"
import { Navbar } from "./components/Navbar.tsx"

const HomePage = () => {
  return (
    <div className="m-auto xl:max-w-[1220px] lg:max-w-[1000px] md:max-w-[100%] p-4">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-2">
          <Navbar/>
        </div>
        <div className="col-span-10">
          <Carousel></Carousel>
        </div>
      </div>
    </div>
  )
}

export default HomePage
