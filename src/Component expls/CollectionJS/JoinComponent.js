export default function JoinComponent(){
    var categories = ["All","Electronics","Footwear"];

    return(
        <div className="container">
            <h2>Categories</h2>
            <ol>
            {
                categories.join("-->")
            }
            </ol>
        </div>
    )
}