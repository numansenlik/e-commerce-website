import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { getCartTotal } from "../redux/cartSlice";
import CartsComp from "../components/cart/CartsComp";

function Cart() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalAmount, itemCount } = useSelector((state: RootState) => state.carts);
  console.log(carts, "/", totalAmount, "/", itemCount);


  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])

  return (
    <div>
      {
        carts.length > 0 ? <div>
          {
            carts.map((cart, index) => (
              <CartsComp key={index} cart={cart} />
            ))
          }
          <div className="flex items-center justify-end text-xl">TOTAL PRICE: <span className="font-bold ml-2">{totalAmount} $</span></div>
        </div> :
          <div>
            Your cart is empty ...
          </div>
      }
    </div>
  )
}
export default Cart