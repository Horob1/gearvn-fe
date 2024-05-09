import Ads from "./components/Ads.tsx"
import { Carousel } from "./components/Carousel.tsx"
import Catelog from "./components/Catelog.tsx"
import { Navbar } from "./components/Navbar.tsx"
import ProducList from "./components/ProducList.tsx"
import {Helmet} from "react-helmet";

const HomePage = () => {
  return (
    <div> 
      <Helmet>
        <meta charSet="utf-8" />
        <title>GEARVN - Máy tính & Laptop</title>
        <meta name="description" content="GEARVN - Cung cấp Hi-End PC, Laptop và Gaming Gear Chuyên Nghiệp" />
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <div className="m-auto xl:max-w-[1220px] lg:max-w-[1000px] md:max-w-[100%] p-4">
      <div className="grid grid-cols-12 gap-3">
        <div className="hidden md:block md:col-span-2 z-20">
          <Navbar/>
        </div>
        <div className="col-span-12 md:col-span-10 z-10">
          <Carousel></Carousel>
        </div>
        
      </div>
      <Ads/>
      <ProducList/>
      <ProducList/>
      <ProducList/>
      <Catelog/>
      </div>
    </div>
  )
}

export default HomePage
