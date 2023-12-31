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
            <Sorting setSort={setSort} sort={sort} />
            <div className="flex">
                <Category setCategory={setCategory} />
                <Products category={category} sort={sort} />
            </div>
        </div>
    )
}
export default Home