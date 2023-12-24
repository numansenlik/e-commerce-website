import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { clearCart, getCartTotal } from "../redux/cartSlice";
import CartsComp from "../components/cart/CartsComp";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalAmount } = useSelector((state: RootState) => state.carts);


  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch, carts])

  return (
    <div>
      {
        carts.length > 0 ? <div>
          {
            carts.map((cart, index) => (
              <CartsComp key={index} cart={cart} />
            ))
          }

          <div className="flex justify-between">
            <div onClick={() => dispatch(clearCart())} className="bg-red-500 text-white w-[150px] h-12 flex items-center justify-center rounded-md cursor-pointer font-semibold" >Clear Cards</div>
            <div className="flex items-center justify-end text-xl">TOTAL PRICE: <span className="font-bold ml-2">{totalAmount} $</span></div>
          </div>
        </div> :
          <div className="flex flex-col items-center">
            <div className="text-center mt-32 text-3xl">
              Your cart is empty ...
            </div>
            <div className="mt-32 text-3xl">
              If you'd like to add something to your cart, please click the button.
            </div>
            <button onClick={()=> navigate('/')} className="text-center mt-20 text-2xl border  px-8 py-3 border-green-600 text-green-400 font-bold rounded-md">Go shopping</button>
          </div>
      }
    </div>
  )
}
export default Cart