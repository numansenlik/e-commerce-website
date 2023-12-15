import { BiSearch } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';


function NavbarRight() {
    return (
        <div className="flex items-center gap-8">
            <div className="flex items-center border p-3 rounded-full bg-gray-200 ">
                <input type="text" className='bg-gray-200 outline-none' placeholder="Search.." />
                <BiSearch size={28} />
            </div>
            <AiOutlineHeart />
            <div className="relative">
                <div className='absolute -top-3 rounded-full text-white bg-red-500 -right-3 w-5 h-5 flex items-center justify-center '>3</div>
                <SlBasket size={28} />
            </div>
        </div>
    )
}
export default NavbarRight