import { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
// import { IoIosSearch } from "react-icons/io";
import ProductCard from "../home/components/ProductSlider/ProductCard"
import { MdOutlineArrowDropDown } from "react-icons/md";
import Catelog from "../home/components/Catelog";
import { Helmet } from "react-helmet-async";
import { ProductType } from "../home/components/ProductSlider/ProductSlider";
import { useSearchParams } from "react-router-dom";
import axios from "./../../utils/axios.ts";
const types = [
  { en: "Camera", vi: "Camera" },
  { en: "Component", vi: "Linh kiện" },
  { en: "Headphone", vi: "Tai nghe" },
  { en: "Keyboard", vi: "Bàn phím" },
  { en: "Laptop", vi: "Laptop" },
  { en: "Monitor", vi: "Màn hình" },
  { en: "Mouse", vi: "Chuột" },
  { en: "Pc", vi: "PC" },
];
const brands = [
  "Dell",
  "ASUS",
  "ACER",
  "MSI",
  "Lenovo",
  "Ezviz",
  "TP-Link",
  "Xiaomi",
  "Samsung",
  "Gigabyte",
  "ViewSonic",
  "Logitech",
  "Razer",
  "DareU",
  "Akko",
  "E-DRA",
  "Rapoo",
  "Corsair",
  "HyperX",
  "Apple",
  "Sony",
];
const SearchPage = () => {
  // const [name, setName] = useState<string>("");
  const [result, setResult] = useState<ProductType[]>([]);
  const [value, setValue] = useState([40000, 100000000]);
  const [typeDe, setTypeDe] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [sortBySold, setSortBySold] = useState<boolean>(false);
  const [sortByPrice, setSortByPrice] = useState<boolean>(false);
  // const navigate = useNavigate();
  const [params] = useSearchParams();
  // const handleSearchBtn = (e) => {
  //   e.preventDefault();
  //   navigate("/search?name=" + name);
  // };

  useEffect(() => {
    // if(params.get('name')) setName(params.get('name') ?? '');
    if(params.get('typeDevice')) setTypeDe(params.get('typeDevice')?? '');
    if(params.get('brand')) setBrand(params.get('brand')?? '');
    if(params.get('maxPrice')) setValue((prev) => [prev[0], Number(params.get("maxPrice")) ?? 100000000]);
    if(params.get('minPrice')) setValue((prev) => [Number(params.get("minPrice")) ?? 0 , prev[1]]);
    if (params.get("sort")) {
      const sortArr = (params.get("sort") ?? '').split(",");
      if (sortArr.includes("-sold")) setSortBySold(true);
      if (sortArr.includes("-price")) setSortByPrice(true);
      if (sortArr.includes("price")) setSortByPrice(false)
    }
  }, [params]);
  useEffect(()=>{
    const controller = new AbortController();
    const callApi = async () => {
      let query = "";
      query += `name=${params.get("name") ?? ''}`;
      if (brand) query += `&brand=${brand}`;
      if (typeDe) query += `&typeDevice=${typeDe}`;
      if (value) query += `&minPrice=${value[0]}&maxPrice=${value[1]}`;
      query += "&sort=";
      if (sortByPrice) query += "-price";
      else query += "price";
      if (sortBySold) query += ",-sold";
      try {
        const res = await axios.get("/api/product?" + query, {
          signal: controller.signal,
        });

        setResult(res?.data?.filterProduct ?? []);
      } catch (error) {
        //
      }
    }
    callApi();
    return () => {
      controller.abort();
    }

  }, [value, typeDe,brand, sortBySold, sortByPrice, params])

  return (
    <div className="m-auto xl:max-w-[1220px] lg:max-w-[1000px] md:max-w-[100%] p-4 flex flex-col gap-4 justify-between items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Kết quả tìm kiếm {params.get('name') ?? ''}</title>
        <meta
          name="description"
          content="Tìm kiếm sản phẩm của hệ thống GEARVN"
        />
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <div className="px-4 pb-12 rounded-md gap-8 flex flex-col py-8 w-full bg-white">
        {/* <div className="flex flex-col gap-4 m-auto ">
          <h3 className="text-center">TÌM KIẾM</h3>
          <form onSubmit={handleSearchBtn} className="relative flex">
            <input
              type="text"
              placeholder="Bạn cần tìm gì?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="py-2 px-2 text-base lg:w-[312px] font-medium rounded-md outline-double outline-2 outline-red-400 focus:outline-red-700 pr-12 "
            />
            <button
              type="submit"
              className=" absolute top-1/2 -translate-y-1/2 right-2"
            >
              <IoIosSearch className="text-xl" />
            </button>
          </form>
        </div> */}
        <div className="w-full">
          <div className="flex gap-4 pb-4 items-baseline">
            <div className="dropdown ">
              <div
                tabIndex={0}
                role="button"
                className={`bg-gray-200 btn hover:bg-red-600 text-black hover:text-white border-0 ${
                  value[0] === 40000 && value[1] === 100000000
                    ? ""
                    : "bg-red-600 text-white"
                }`}
              >
                Giá{" "}
                <MdOutlineArrowDropDown className="text-base"></MdOutlineArrowDropDown>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content bg-white  z-[1] menu p-2 shadow rounded-box w-80"
              >
                <div className="px-2 py-1.5">
                  <div className="flex gap-20 mb-6">
                    <span className="px-2 py-1.5 rounded-md text-center flex-1 border">
                      {value[0].toLocaleString("vi-VN")}đ
                    </span>
                    <span className="px-2 py-1.5 rounded-md flex-1 text-center w-30 border">
                      {value[1].toLocaleString("vi-VN")}đ
                    </span>
                  </div>
                  <RangeSlider
                    className=" w-full "
                    min={50000}
                    max={100000000}
                    step={500000}
                    value={value}
                    onInput={setValue}
                  />
                </div>
              </ul>
            </div>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className={`${
                  typeDe ? "!bg-red-600 !text-white" : ""
                } bg-gray-200 text-black hover:bg-red-600 hover:text-white btn border-0`}
              >
                Loại sản phẩm
                <MdOutlineArrowDropDown className="text-base"></MdOutlineArrowDropDown>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content bg-white z-[1] menu p-2 shadow rounded-box w-80"
              >
                <div className="px-2 py-1.5 grid grid-cols-4 gap-3">
                  {types.map((item) => (
                    <button
                      key={item.en}
                      onClick={() => setTypeDe(item.en)}
                      className={`${
                        item.en === typeDe ? "!bg-red-600 !text-white" : ""
                      } col-span-2 btn bg-white border-[1px] hover:border-0 text-black hover:text-white hover:bg-red-600`}
                    >
                      {item.vi.toUpperCase()}
                    </button>
                  ))}
                  <button
                    onClick={() => setTypeDe("")}
                    className={` col-span-2 btn bg-white border-[1px] hover:border-0 text-black hover:text-white hover:bg-red-600`}
                  >
                    TẤT CẢ
                  </button>
                </div>
              </ul>
            </div>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className={`bg-gray-200  text-black hover:bg-red-600 hover:text-white btn border-0 ${
                  !brand ? "" : "!bg-red-600 !text-white"
                }`}
              >
                Thương hiệu{" "}
                <MdOutlineArrowDropDown className="text-base"></MdOutlineArrowDropDown>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content bg-white z-[1] menu p-2 shadow rounded-box w-[500px]"
              >
                <div className="px-2 py-1.5 grid grid-cols-8 gap-3">
                  {brands.map((item) => (
                    <button
                      key={item}
                      onClick={() => setBrand(item)}
                      className={`btn ${
                        brand === item ? "!bg-red-600 !text-white" : ""
                      } bg-white text-black col-span-2 hover:text-white hover:bg-red-600 border-[1px] hover:border-0 `}
                    >
                      {item.toUpperCase()}
                    </button>
                  ))}
                  <button
                    onClick={() => setBrand("")}
                    className={`bg-white text-black col-span-2 hover:text-white hover:bg-red-600 border-[1px] hover:border-0 `}
                  >
                    TẤT CẢ
                  </button>
                </div>
              </ul>
            </div>
            <button
              onClick={() => setSortBySold(!sortBySold)}
              className={`${
                sortBySold ? "!bg-red-600 !text-white" : ""
              } btn bg-gray-200 border-0 text-black hover:bg-red-600 hover:text-white `}
            >
              Bán chạy
            </button>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className={`bg-gray-200 text-black hover:bg-red-600 hover:text-white btn border-0`}
              >
                {sortByPrice ? "Từ cao tới thấp" : "Từ thấp tới cao"}
                <MdOutlineArrowDropDown className="text-base"></MdOutlineArrowDropDown>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content bg-white z-[1] menu p-2 shadow rounded-box w-60"
              >
                <div className="px-2 py-1.5 grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setSortByPrice(false)}
                    className={`${
                      sortByPrice ? "" : "!text-white !bg-red-600"
                    } col-span-3 btn bg-white border-[1px] hover:border-0 text-black hover:text-white hover:bg-red-600 `}
                  >
                    Từ thấp tới cao
                  </button>
                  <button
                    onClick={() => setSortByPrice(true)}
                    className={`${
                      !sortByPrice ? "" : "!text-white !bg-red-600"
                    } col-span-3 btn bg-white border-[1px] hover:border-0 text-black hover:text-white hover:bg-red-600 `}
                  >
                    Từ cao đến thấp
                  </button>
                </div>
              </ul>
            </div>
          </div>
          <div className="flex gap-4 items-baseline">
            <span>Kết quả tìm kiếm cho:</span>
            <span className="text-gray-500 text-lg">{params.get('name') ?? ''}</span>
            <span className="text-red-600 text-lg">
              (có {result.length} kết quả)
            </span>
          </div>
          {result.length === 0 && (
            <div className="p-10 mt-12 flex flex-col gap-4">
              <svg
                className="m-auto"
                width="132"
                height="170"
                viewBox="0 0 132 170"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6133_13905)">
                  <path
                    d="M125.486 120.371H113.585V91.6562H132V113.845C132 117.451 129.086 120.371 125.486 120.371Z"
                    fill="#A1AAAF"
                  ></path>
                  <path
                    d="M99.3294 167.226C95.6392 170.922 89.6482 170.922 85.949 167.226L50.2828 131.497C46.5926 127.801 46.5926 121.799 50.2828 118.094C53.973 114.397 59.964 114.397 63.6633 118.094L99.3294 153.822C103.029 157.528 103.029 163.529 99.3294 167.226Z"
                    fill="#E1E4E6"
                  ></path>
                  <path
                    d="M128.553 117.208C126.649 117.208 125.107 115.662 125.107 113.755V91.9459C125.107 91.8465 125.125 91.7561 125.134 91.6567H125.107V6.06465C125.107 2.72051 122.4 0 119.052 0H42.7036C39.3652 0 36.6494 2.71147 36.6494 6.06465V114.315C36.6494 117.66 39.3562 120.38 42.7036 120.38H113.585H125.107H125.486C129.086 120.38 132 117.461 132 113.855V113.764C132 115.662 130.457 117.208 128.553 117.208Z"
                    fill="#E1E4E6"
                  ></path>
                  <path
                    d="M40.1233 148.932C62.2828 148.932 80.2466 130.937 80.2466 108.739C80.2466 86.5409 62.2828 68.5459 40.1233 68.5459C17.9638 68.5459 0 86.5409 0 108.739C0 130.937 17.9638 148.932 40.1233 148.932Z"
                    fill="#CBD1D6"
                  ></path>
                  <path
                    d="M40.1235 136.577C55.4712 136.577 67.9129 124.113 67.9129 108.739C67.9129 93.3647 55.4712 80.9014 40.1235 80.9014C24.7758 80.9014 12.334 93.3647 12.334 108.739C12.334 124.113 24.7758 136.577 40.1235 136.577Z"
                    fill="white"
                  ></path>
                  <path
                    d="M51.6001 97.2418C52.9084 98.5524 52.9084 100.676 51.6001 101.987L33.3836 120.226C32.0753 121.537 29.955 121.537 28.6467 120.226C27.3385 118.916 27.3385 116.792 28.6467 115.481L46.8633 97.2328C48.1715 95.9313 50.2918 95.9313 51.6001 97.2418Z"
                    fill="#F56F65"
                  ></path>
                  <path
                    d="M51.6001 120.226C50.2918 121.537 48.1715 121.537 46.8633 120.226L28.6467 101.978C27.3385 100.667 27.3385 98.5435 28.6467 97.2329C29.955 95.9224 32.0753 95.9224 33.3836 97.2329L51.6001 115.481C52.9084 116.792 52.9084 118.925 51.6001 120.226Z"
                    fill="#F56F65"
                  ></path>
                  <path
                    d="M55.9488 25.7136C59.7112 25.7136 63.3112 22.4056 63.1398 18.5101C62.9684 14.6056 59.9819 11.3066 55.9488 11.3066C52.1864 11.3066 48.5864 14.6146 48.7578 18.5101C48.9293 22.4146 51.9157 25.7136 55.9488 25.7136Z"
                    fill="white"
                  ></path>
                  <path
                    d="M80.1925 25.7136C83.9549 25.7136 87.5549 22.4056 87.3834 18.5101C87.212 14.6056 84.2255 11.3066 80.1925 11.3066C76.4301 11.3066 72.8301 14.6146 73.0015 18.5101C73.1819 22.4146 76.1684 25.7136 80.1925 25.7136Z"
                    fill="white"
                  ></path>
                  <path
                    d="M104.445 25.7136C108.207 25.7136 111.807 22.4056 111.636 18.5101C111.464 14.6056 108.478 11.3066 104.445 11.3066C100.683 11.3066 97.0825 14.6146 97.2539 18.5101C97.4344 22.4146 100.421 25.7136 104.445 25.7136Z"
                    fill="white"
                  ></path>
                  <path
                    d="M108.28 44.9557H51.1307C49.678 44.9557 48.4961 43.7717 48.4961 42.3165V40.8071C48.4961 39.352 49.678 38.168 51.1307 38.168H108.28C109.732 38.168 110.914 39.352 110.914 40.8071V42.3165C110.914 43.7717 109.732 44.9557 108.28 44.9557Z"
                    fill="white"
                  ></path>
                  <path
                    d="M108.343 61.6042H51.0585C49.642 61.6042 48.4961 60.4563 48.4961 59.0373V57.7358C48.4961 56.3168 49.642 55.1689 51.0585 55.1689H108.343C109.759 55.1689 110.905 56.3168 110.905 57.7358V59.0373C110.914 60.4473 109.759 61.6042 108.343 61.6042Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_6133_13905">
                    <rect width="132" height="170" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <div>
                <p className="text-center">
                  Rất tiếc, chúng tôi không tìm thấy kết quả cho từ khóa của bạn
                </p>
                <p className="text-center">
                  Vui lòng kiểm tra chính tả, sử dụng các từ tổng quát hơn và
                  thử lại!
                </p>
              </div>
            </div>
          )}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-full">
            {result.length !== 0 &&
              result.map((result) => (
                <ProductCard key={result._id} isLoading={false} product={result}></ProductCard>
              ))}
          </div>
        </div>
      </div>
      <Catelog></Catelog>
    </div>
  );
};

export default SearchPage;
