import React from "react"
import { ICartItem, decQuantity, incQuantity, removeFromCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


interface ICartCompProps {
  cart: ICartItem;
}

const CartsComp: React.FC<ICartCompProps> = ({ cart }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch()
  return (
    <div className="my-10 flex items-center justify-between">
      <img onClick={() => navigate(`/products/${cart.id}`)} src={cart?.image} className="w-[150px] h-[150px] object-contain my-10 cursor-pointer" alt="" />
      <div className="w-[500px]">
        <div className="text-xl ">{cart?.title}</div>
      </div>
      <div>{cart?.price} $ ({cart?.quantity}) <span className="mx-2 font-bold text-green-500 text-2xl cursor-pointer" onClick={() => dispatch(incQuantity(cart.id))}>+</span><span className="mx-2 font-bold text-red-500 cursor-pointer text-2xl" onClick={() => dispatch(decQuantity(cart.id))}>-</span></div>
      <div onClick={() => dispatch(removeFromCart(cart.id))} className="bg-red-500 text-white w-[150px] h-12 flex items-center justify-center rounded-md cursor-pointer font-semibold  ">Delete Product</div>
    </div>
  )
}
export default CartsComp