import { useState } from "react"
import Category from "../components/home/Category"
import Products from "../components/home/Products"
import SliderComp from "../components/home/SliderComp"
import Sorting from "../components/home/Sorting"

function Home() {

    const [sort, setSort] = useState<string>('');
    const [category, setCategory] = useState<string>('');

    return (
        <div>
            <SliderComp />
            <Sorting />
            <div className="flex">
                <Category  />
                <Products />
            </div>
        </div>
    )
}
export default Home