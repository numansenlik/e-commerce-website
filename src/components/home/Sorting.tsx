
interface ISortingProps {
    setSort: (sort: string) => void,
    sort:string
}

const Sorting: React.FC<ISortingProps> = ({ setSort, sort }) => {
    return (
        <div className="bg-gray-100 my-5 p-5 flex items-center justify-end">
            <select onChange={e => setSort(e.target.value)} value={sort} className="bg-white py-3 px-5" name="" id="">
                <option disabled value="">Choose</option>
                <option value="inc">İncrement</option>
                <option value="dec">Decremeent</option>
            </select>
        </div>
    )
}
export default Sorting