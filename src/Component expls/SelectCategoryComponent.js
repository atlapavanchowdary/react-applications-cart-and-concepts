export default function SelectCategoryComponent(){
    var categories = ["All","Electronics","Footwear"];
    return(
        <div className="container">
            <h2>SelectCategory</h2>

            <select>
            {
                categories.map(category => 
                        <option value={category}>{category}</option>
                    )
            }
            </select>
        </div>
    )
}