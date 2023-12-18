import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";
import { AppDispatch, RootState } from "../../redux/store";

function Category() {
    const { categories } = useSelector((state: RootState) => state.categories);
    const dispatch = useDispatch<AppDispatch>();

    console.log(categories, "data");

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <div className="w-1/6 bg-gray-100 p-4 max-h-screen">
            <div className="border-b pb-2 text-xl font-bold px-2">Category</div>
            {categories?.map((category: string, index: number) => (
                <div className="text-lg cursor-pointer hover:bg-gray-200 p-2 first-letter:uppercase" key={index}>{category}</div>
            ))
            }
        </div>
    );
}

export default Category;
