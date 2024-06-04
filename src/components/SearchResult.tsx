import { Link} from "react-router-dom";
import img from "../assets/download.gif";
import "./searchResult.css";
import { ProductType } from "../pages/home/components/ProductSlider/ProductSlider";
type SearchResultProps = {
  result: ProductType[];
  query: string;
  isOpen: boolean;
};
export const SearchResult = ({
  isOpen,
  result,
  query,
}: SearchResultProps) => {

  return (
    <div className={`search-result ${result.length === 0  || !isOpen ? "hidden" : ""}`}>
      <div className="px-4 pt-2 bg-white shadow-md rounded-md absolute w-[130%] max-h-[300px] top-[110%] left-0 overflow-y-auto">
        {result && isOpen &&
          result.map((item) => (
            <Link to={'/products/'+item.slug} key={item._id}>
              <div className="flex justify-between items-center pb-2 border-b-2">
                <div className="pr-5 pt-2">
                  <span className="line-clamp-1 text-sm">{item?.name}</span>
                  <div className="flex gap-4 line-clamp-1">
                    <span className="text-red-600 text-sm">
                      {new Intl.NumberFormat("de-DE").format(
                        ((item?.price ?? 0) * (100 - (item?.discount ?? 0))) /
                          100
                      )}
                      đ
                    </span>{" "}
                    <span className="text-gray-500 line-through text-xs">
                      {new Intl.NumberFormat("de-DE").format(item?.price ?? 0)}đ
                    </span>
                  </div>
                </div>
                <img
                  src={item?.imageList?.[0] ?? img}
                  className="h-[50px] aspect-square"
                  alt=""
                />
              </div>
            </Link>
          ))}

        <div className="flex">
          <Link to={'/search?name='+query}
            className="text-black m-auto px-4 py-3 cursor-pointer hover:text-red-600"
          >
            Hiển thị thêm
          </Link>
        </div>
      </div>
    </div>
  );
};
