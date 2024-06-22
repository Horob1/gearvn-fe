import { FaStar } from "react-icons/fa6";
import { Rate } from "./RatingList";
import { convertDate } from "../../utils/convertDate";
type RatingCardProps = {
  rate: Rate;
};
const RatingCard = ({ rate }: RatingCardProps) => {
  return (
    <div className="border-b-2 flex flex-col gap-1 rounded-sm px-3 py-1 ml-3 my-1.5">
      <div className="flex gap-3 items-baseline">
        <h4 className="font-medium">{rate?.name}</h4>
        <span className="text-gray-500">{convertDate(rate?.createAt)}</span>
      </div>
      <p className="text-gray-600 mt-2">{rate?.comment}</p>
      <div className="mb-4 flex gap-1">
        {[0, 1, 2, 3, 4].map((key) => (
          <FaStar
            key={key}
            className={`${
              key + 1 <= rate?.rate ? "text-red-500" : "text-gray-500"
            }`}
          ></FaStar>
        ))}
      </div>
    </div>
  );
};

export default RatingCard;
