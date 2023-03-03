export default function CollectionmapComponent()
{
    var categories=["All","Electronics","Footwear"];
    return(
        <div className="container">
            <h2>Categories</h2>
            <ol>
            {
                categories.map(category =>
                    <li>{category}</li>
            )
           }
            </ol>
        </div>
    )
}