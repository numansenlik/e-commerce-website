import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCategoryProducts, getProducts } from "../../redux/productSlice";
import { AppDispatch, RootState } from "../../redux/store";
import Loading from "../Loading";
import Product from "./Product";
import ReactPaginate from "react-paginate";

interface IPageChange {
    selected: number;
}

interface IProductsProps {
    category: string,
    sort: string
}


const Products: React.FC<IProductsProps> = ({ category, sort }) => {

    const dispatch = useDispatch<AppDispatch>();
    const { products, productsStatus } = useSelector((state: RootState) => state.products);
    console.log(products, productsStatus);

    const [itemOffset, setItemOffset] = useState<number>(0);

    const itemsPerPage = 6;
    const endOffset = itemOffset + itemsPerPage;
    const sortProducts = [...products].sort((a, b) => {
        return sort === "inc" ? a.price - b.price : sort === "dec" ? b.price - a.price : 0;
      });
    const currentItems = sortProducts.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event: IPageChange) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };


    useEffect(() => {
        if (category) {
            dispatch(getCategoryProducts(category))
        } else {
            dispatch(getProducts())
        }
    }, [dispatch, category])

    return (
        <div>
            {
                productsStatus == "LOADING" ? <Loading /> :
                    <>
                        <div className="flex flex-wrap ">
                            {
                                currentItems?.map((product) => (
                                    <Product key={product.id} product={product} />
                                ))
                            }
                        </div>
                        <ReactPaginate
                            className="paginate"
                            breakLabel="..."
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="<"
                            renderOnZeroPageCount={null}
                        />
                    </>
            }
        </div>
    )
}
export default Products