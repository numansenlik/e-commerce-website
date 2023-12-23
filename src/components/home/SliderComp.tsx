import Slider from "react-slick";

function SliderComp() {
    
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
                <div className="!flex items-center bg-gray-100 px-6 ">
                    <div>
                        <div className="text-6xl font-bold">Lorem ipsum dolor sit.</div>
                        <div className="text-lg my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum illum dolorem sunt animi neque corporis quod, numquam aut necessitatibus eaque voluptatum atque eius odit ullam dolore quas quia! Vero, vitae.</div>
                        <div className=" border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">Review</div>
                    </div>
                    <img className="h-[500px]" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_382,c_limit/60d2e87c-9eaa-46a0-b9aa-0f730291262b/air-force-1-07-ayakkab%C4%B1s%C4%B1-SqKG2H.png" alt="Shoe" />
                </div>
                <div className="!flex items-center bg-gray-100 px-6 ">
                    <div >
                        <div className="text-6xl font-bold">Lorem ipsum dolor sit.</div>
                        <div className="text-lg my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum illum dolorem sunt animi neque corporis quod, numquam aut necessitatibus eaque voluptatum atque eius odit ullam dolore quas quia! Vero, vitae.</div>
                        <div className=" border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200">Review</div>
                    </div>
                    <img className="h-[500px]" src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_382,c_limit/0892b7ef-759f-4fc2-9826-0c0a62052131/court-legacy-lift-ayakkab%C4%B1s%C4%B1-qpDJ7F.png" alt="Shoe" />
                </div>
            </Slider >
        </div >
    )
}
export default SliderComp