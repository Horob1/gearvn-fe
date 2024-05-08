import img1 from './../../../assets/dummy/carousel/img1.webp'
import img2 from './../../../assets/dummy/carousel/img2.webp'
import img3 from './../../../assets/dummy/carousel/img3.webp'
import img4 from './../../../assets/dummy/carousel/img4.webp'
import img5 from './../../../assets/dummy/carousel/img5.webp'
import img6 from './../../../assets/dummy/carousel/img6.webp'
import ImageSlider from './ImageSlider'

const IMGS= [img1, img2, img3, img4, img5, img6];

export const Carousel = () => {
  return (
    <div className="carousel rounded-md md:h-96 w-full ">
      <ImageSlider isLoading={false} imgs={IMGS}></ImageSlider>
    </div>
  )
}
