import { FaStar } from "react-icons/fa6"

const RatingCard = () => {
  return (
    <div className="border-b-2 flex flex-col gap-1 rounded-sm px-3 py-1 ml-3 my-1.5">
      <div className="flex gap-3 items-baseline">
        <h4 className="font-bold">User name</h4> 
        <span className="text-gray-500">24-10-2023</span>
      </div>
      <p className="text-gray-600 mt-2">this is sample commnent</p>
      <div className="mb-4 flex gap-1">
        {[0,1,2,3,4].map(key=> <FaStar key={key}></FaStar>)}
      </div>
    </div>
  )
}

export default RatingCard
