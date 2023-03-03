export default function UniqueKyItrComponent(){
    var categories=["All","Electronics","Footwear","Fashion"];
    return(
        <div className="container">
            <h2>Categories</h2>

            <ol>
                {
                    categories.map(category =>
                        <li key={category}>{category}</li>
                    )
                }
            </ol>

            <h2>Select Category</h2>
            <select>
                {
                    categories.map(category =>
                            <option key={category} value={category}>{category}</option>
                        )
                }
            </select>
        </div>
    )
}