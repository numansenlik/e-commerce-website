import { IProduct } from "../../redux/productSlice"


interface IDetailCompProps {
    productDetail: IProduct;
}


const DetailComp: React.FC<IDetailCompProps> = ({ productDetail }) => {
    return (
        <div className="flex gap-10 my-10">
            <img className="w-[700px] h-[500px] object-contain" src={productDetail?.image} alt="" />
            <div className="my-auto">
                <div className="text-4xl font-bold">{productDetail?.title}</div>
                <div className="my-2 text-2xl">{productDetail?.description}</div>
                <div className="my-2 text-lg text-green-500">Rating: {productDetail?.rating?.rate}</div>
                <div className="my-2 text-lg ">Count: {productDetail?.rating?.count}</div>
                <div className="text-2xl font-bold">Price: {productDetail?.price} $</div>
                <div className="flex items-center gap-5">
                    <div className="text-4xl">-</div>
                    <input type=" w-5 widh-[50px] text-center" defaultValue="0" />
                    <div className="text-4xl ">+</div>
                </div>
                <div className="my-4 border flex w-[200px] text-2xl rounded-md bg-gray-200 cursor-pointer h-16  items-center justify-center">Add to Bag</div>
            </div>
        </div>
    )
}
export default DetailComp