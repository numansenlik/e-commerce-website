
interface ProductProps {
    product: {
        id: number;
        title: string;
        price: number;
        category: string;
        description: string;
        image: string;
    };
}

const Product: React.FC<ProductProps> = ({ product }) => {
    return (
        <div className="w-[400px] p-3 mb-5 mx-5 rounded-md border relative cursor-pointer">
            <div className="text-1xl font-bold absolute rounded-md top-1 right-1 bg-black text-white p-2 m-1">{product?.price} <span className="text-sm">TL</span></div>
            <img className="w-[200px] h-[200px] object-contain m-auto" src={product?.image} alt="" />
            <div className="text-center px-3 mt-3 text-l font-bold">{product?.title}</div>
        </div>
    )
}
export default Product