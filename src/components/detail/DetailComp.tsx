import { useState } from "react";
import { IProduct } from "../../redux/productSlice"


interface IDetailCompProps {
    productDetail: IProduct;
}


const DetailComp: React.FC<IDetailCompProps> = ({ productDetail }) => {
    const [quantity, setQuantity] = useState<number>(0);

    const addBasket = () => {
        
    }

    const decrement = () => {
        setQuantity(prev => prev >= 1 ? prev - 1 : prev)
    }

    const increment = () => {
        setQuantity(prev => productDetail.rating.count >= prev ? prev + 1 : prev)
    }

    return (
        <div className="flex gap-10 my-10">
            <img className="w-[700px] h-[500px] object-contain" src={productDetail?.image} alt="" />
            <div className="my-auto">
                <div className="text-4xl font-bold">{productDetail?.title}</div>
                <div className="my-2 text-2xl">{productDetail?.description}</div>
                <div className={`my-2 text-lg ${productDetail?.rating?.rate >= 3 ? "text-green-500" : "text-red-500"}`}>Rating: {productDetail?.rating?.rate}</div>
                <div className={`my-2 text-lg ${productDetail?.rating?.count >= 100 ? "text-green-500" : "text-red-500"}`}>Count: {productDetail?.rating?.count}</div>
                <div className="text-2xl font-bold">Price: {productDetail?.price} $</div>
                <div className="flex items-center gap-5 my-4">
                    <div onClick={decrement} className="text-4xl cursor-pointer">-</div>
                    <div className="w-6 text-center text-xl" >{quantity}</div>
                    <div onClick={increment} className="text-3xl cursor-pointer">+</div>
                </div>
                <div onClick={addBasket} className="my-4 border flex w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer h-16  items-center justify-center">Add to Bag</div>
            </div>
        </div>
    )
}
export default DetailComp