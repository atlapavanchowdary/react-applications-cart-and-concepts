export default function FilterComponent(){
    var categories=["All","Electronics","Footwear"];

    return(
        <div className="container">
            <h2>Categories</h2>

            <ol>
            {
                categories.filter(category => category.includes('e')).map(filteredName => (
                    <li>
                        {filteredName}
                    </li>
                ))
            }
            </ol>

        </div>
    )
}