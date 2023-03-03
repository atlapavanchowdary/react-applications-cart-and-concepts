export default function ToStringComponent(){
    var categories=["All","Electronics","Footwear"];
    return(
        <div className="container">
            <h2>Categories</h2>
            <ol>
                {categories.toString()}
            </ol>
        </div>
    )
}