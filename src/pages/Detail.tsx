import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { AppDispatch, RootState } from "../redux/store";
import { useEffect } from "react";
import { getDetailProduct } from "../redux/productSlice";
import DetailComp from "../components/detail/DetailComp";
import Loading from "../components/Loading";


function Detail() {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch<AppDispatch>();
    const { productDetail, productDetailStatus } = useSelector((state: RootState) => state.products);

    useEffect(() => {
        if (!id) {
        } else {
            dispatch(getDetailProduct(id));
        }
    }, [dispatch, id])

    return (
        <div>
            {
                productDetailStatus == "LOADING" ? <Loading/> : <DetailComp productDetail= {productDetail}/>
            }
            
        </div>
    )
}
export default Detail