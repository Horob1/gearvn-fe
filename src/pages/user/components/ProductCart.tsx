import { RiDeleteBin5Line } from "react-icons/ri";
import { ProductType } from "../../home/components/ProductSlider/ProductSlider";
import errorImg from "./../../../assets/download.gif";
import { useAppDispatch } from "../../../store";
import {
  addProductToCart,
  decreaseProductFromCart,
  removeProductFromCart,
} from "../../../slice/cart.slice";
type ProductCardProps = {
  cart: {
    product: ProductType;
    quantity: number;
  };
};
const ProductCart = ({ cart }: ProductCardProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="grid grid-cols-5 w-full gap-4 relative pb-2 border-b-2">
      <div className="col-span-2 h-32 w-full">
        <img
          src={cart?.product?.imageList?.[0] ?? errorImg}
          className="h-full m-auto aspect-square"
          alt=""
        />
      </div>
      <div className="col-span-3 flex flex-col justify-between gap-3">
        <h6 className="text-base line-clamp-2">{cart?.product?.name}</h6>
        <div>
          <span className="text-gray-500 line-through">
            {new Intl.NumberFormat("de-DE").format(cart?.product?.price ?? 0)}đ
          </span>
          <div className="flex items-center">
            <h4 className="text-red-600">
              {new Intl.NumberFormat("de-DE").format(
                ((cart?.product?.price ?? 0) *
                  (100 - (cart?.product?.discount ?? 0))) /
                  100
              )}
              đ
            </h4>{" "}
            <div className="ml-2 text-red-600 border border-red-600  px-2 rounded-md">
              {" "}
              -{cart?.product?.discount ?? 0}%{" "}
            </div>
          </div>
        </div>
        <div className="join">
          <button
            onClick={() => {
              if (cart?.quantity !== 1)
                dispatch(decreaseProductFromCart(cart.product));
              // eslint-disable-next-line
              // @ts-ignore: Unreachable code error
              else document?.getElementById(cart.product._id)?.showModal();
            }}
            className="join-item btn"
          >
            -
          </button>
          <button disabled={true} className="join-item btn !text-black">
            {cart?.quantity}
          </button>
          <button
            onClick={() => dispatch(addProductToCart(cart.product))}
            className="join-item btn"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => {
          // eslint-disable-next-line
          // @ts-ignore: Unreachable code error
          document?.getElementById(cart.product._id)?.showModal();
        }}
        className="absolute bottom-0 right-0 p-4 rounded-full hover:bg-slate-200"
      >
        <RiDeleteBin5Line className="text-xl"></RiDeleteBin5Line>
      </button>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id={cart.product._id} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Bạn có chắc xoá sản phẩm này?</h3>
          <div className="modal-action">
            <button
              onClick={() => dispatch(removeProductFromCart(cart.product))}
              className="btn mr-4 bg-red-500 hover:bg-red-400 text-white "
            >
              Có
            </button>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}

              <button className="btn">Không</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProductCart;
