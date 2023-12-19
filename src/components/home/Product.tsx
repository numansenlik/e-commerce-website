import { useNavigate } from "react-router-dom";

interface IProductProps {
    product: {
        id: number;
        title: string;
        price: number;
        category: string;
        description: string;
        image: string;
        rating: {
            count: number;
            rate: number;
        }
    };
}

const Product: React.FC<IProductProps> = ({ product }) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`products/${product?.id}`)} className="w-[400px] p-3 mb-5 mx-5 rounded-md border relative cursor-pointer">
            <div className="text-1xl font-bold absolute rounded-md top-1 right-1 bg-black text-white p-2 m-1">{product?.price} <span className="text-sm">$</span></div>
            <img className="w-[200px] h-[200px] object-contain m-auto" src={product?.image} alt="" />
            <div className="text-center px-3 mt-3 text-l font-bold">{product?.title}</div>
        </div>
    )
}
export default Product