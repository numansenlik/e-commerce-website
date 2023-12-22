import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { clearCart, getCartTotal } from "../redux/cartSlice";
import CartsComp from "../components/cart/CartsComp";

function Cart() {
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount  } = useSelector((state: RootState) => state.carts);
  console.log(carts, "/", totalAmount, "/", itemCount);


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
          <div onClick={()=> dispatch(clearCart())} className="bg-red-500 text-white w-[150px] h-12 flex items-center justify-center rounded-md cursor-pointer font-semibold" >Clear Cards</div>
          <div className="flex items-center justify-end text-xl">TOTAL PRICE: <span className="font-bold ml-2">{totalAmount} $</span></div>
          </div>
        </div> :
          <div className="text-center mt-32 text-3xl">
            Your cart is empty ...
          </div>
      }
    </div>
  )
}
export default Cart