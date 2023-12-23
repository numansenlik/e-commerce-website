import { BiSearch } from 'react-icons/bi';
import { SlBasket } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCartTotal } from '../../../redux/cartSlice';
import { RootState } from '../../../redux/store';
import { useNavigate } from 'react-router-dom';


function NavbarRight() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const carts = useSelector((state: RootState) => state.carts.carts);

    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch])

    return (
        <div className="flex items-center gap-8">
            <div className="flex items-center border p-3 rounded-full bg-gray-200 ">
                <input type="text" className='bg-gray-200 outline-none' placeholder="Search.." />
                <BiSearch size={28} />
            </div>
            <div onClick={() => navigate("cart")} className="relative cursor-pointer">
                <div className='absolute -top-3 rounded-full text-white bg-red-500 -right-3 w-5 h-5 flex items-center justify-center '>{carts?.length}</div>
                <SlBasket size={28} />
            </div>
        </div>
    )
}
export default NavbarRight