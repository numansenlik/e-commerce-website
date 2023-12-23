import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { RootState } from "../../redux/store";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";

function SliderComp() {
    const { products, productsStatus } = useSelector((state: RootState) => state.products);
    const navigate = useNavigate();

    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
 

    return (
        <div>
            <Slider {...settings}>
                {productsStatus == "LOADING" ? <Loading /> :
                    products.map((item, index) => (
                        <div key={index} className="!flex items-center bg-gray-100 px-6  h-[400px] justify-around">
                            <div>
                                <div className="text-3xl font-bold">{item.title}</div>
                                <div className="text-lg my-4">{item.description.substring(0, 300) + '...'}</div>
                                <div onClick={()=> navigate(`/products/${item.id}`)} className=" border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">Review</div>
                            </div>
                            <img className=" w-[300px] h-[300px] object-contain" src={item.image} alt="Shoe" />
                        </div>
                    ))}
            </Slider >
        </div >
    )
}
export default SliderComp