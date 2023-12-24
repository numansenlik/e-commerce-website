import { BiSearch } from 'react-icons/bi';
import { SlBasket } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCartTotal } from '../../../redux/cartSlice';
import { RootState } from '../../../redux/store';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../../redux/productSlice';


function NavbarRight() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [search, setSearch] = useState<string>("");

    const carts = useSelector((state: RootState) => state.carts.carts);
    const { products } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(getCartTotal(), getProducts());
    }, [dispatch])

    return (
        <div className="flex items-center gap-8">
            <div className='flex flex-col'>
                <div className="flex items-center border p-3 rounded-full bg-gray-200 ">
                    <input type="text" className='bg-gray-200 outline-none' value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search.." />
                    <BiSearch size={28} />
                </div>
                <div className='top-20 px-3 absolute z-50 w-[250px] '>
                    {(search && products) && products.filter((item) => item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((item,index) => (
                        <div key={index} className='flex items-center mb-1 bg-gray-300 border-solid  border-gray-600 rounded-3xl cursor-pointer'
                            onClick={() => {
                                navigate(`/products/${item.id}`)
                                setSearch('');
                            }}>
                            <img src={item.image} className='h-15 w-10 object-contain' alt="" />
                            <p className='text-center '>{item.title.substring(0, 35) + '...'}</p>
                        </div>))}
                </div>
            </div>
            <div onClick={() => navigate("cart")} className="relative cursor-pointer">
                <div className='absolute -top-3 rounded-full text-white bg-red-500 -right-3 w-5 h-5 flex items-center justify-center '>{carts?.length}</div>
                <SlBasket size={28} />
            </div>
        </div>
    )
}
export default NavbarRight