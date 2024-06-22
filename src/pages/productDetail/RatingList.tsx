import RatingCard from "./RatingCard.tsx";
export type Rate = {
  userId: string;
  name: string;
  rate: number;
  comment: string;
  createAt: number;
};
type RatingListProps = {
  rateList: Rate[];
};
const RatingList = ({ rateList }: RatingListProps) => {
  return (
    <div className="mt-6">
      {rateList.length > 0 &&
        rateList &&
        rateList.map((rate) => (
          <RatingCard
            key={rate?.userId + rate?.createAt}
            rate={rate}
          ></RatingCard>
        ))}
    </div>
  );
};

export default RatingList;
