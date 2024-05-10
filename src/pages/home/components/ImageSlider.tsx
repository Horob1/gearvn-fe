import { useEffect, useState } from "react"
import { FaImage, FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { RiSubtractFill } from "react-icons/ri";

type ImageSliderProps = {
  imgs: string[],
  isLoading: boolean
}

const ImageSlider = ({imgs, isLoading}: ImageSliderProps) => {
  const [index, setIndex] = useState(0)
  const handleLeftButton = () => {
    if(index === 0) setIndex(5)
    else setIndex(index - 1)
    console.log(index)
  }
  const handleRightButton = () => {
    if(index === 5) setIndex(0)
    else setIndex(index + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleRightButton();
    }, 9000);

    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <div className="w-full">
      {isLoading ? 
      <div className="skeleton md:h-96 w-full relative">
        <FaImage className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 text-3xl text-gray-500"/>
      </div>
      :
      <div className="w-full relative md:h-96">
        <img key={index} className="w-full h-full rounded-md animate-blinker" src={imgs[index]} alt="center-banner" />
        <button onClick={handleLeftButton}
        className="absolute top-1/2 -translate-y-1/2 left-2 text-white cursor-pointer z-2"
        >
          <FaAngleLeft 
          className="text-5xl"
          />
        </button>
        <button onClick={handleRightButton}
        className="absolute top-1/2 -translate-y-1/2 right-2 text-white cursor-pointer z-2"
        >
          <FaAngleRight 
          className="text-5xl" 
          />
        </button>
        <div className="hidden md:block absolute bottom-2 left-1/2 -translate-x-1/2">
          {[0,1,2,3,4,5].map(
            (_index, key) => 
            <button key={key} onClick={() => setIndex(_index)} className={_index===index ? 'text-red-600': 'text-white'}>
              <RiSubtractFill className="text-5xl z-10"/>
            </button>)
          }
        </div>
      </div>
      }
    </div>
  )
}

export default ImageSlider
