import React from "react"
import { ICartItem, removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";


interface ICartCompProps {
  cart: ICartItem;
}

const CartsComp: React.FC<ICartCompProps> = ({ cart }) => {

  const dispatch = useDispatch()
  return (
    <div className="my-10 flex items-center justify-between">
      <img src={cart?.image} className="w-[150px] h-[150px] object-contain my-10" alt="" />
      <div className="w-[500px]">
        <div className="text-xl ">{cart?.title}</div>
      </div>
        <div>{cart?.price} $ ({cart?.quantity})</div>
        <div onClick={()=> dispatch(removeFromCart(cart.id))} className="bg-red-500 text-white w-[150px] h-12 flex items-center justify-center rounded-md cursor-pointer font-semibold  ">Delete Product</div>
    </div>
  )
}
export default CartsComp