export default function SliceComponent(){
    var categories=["All","Electronics","Footwear"]
    return(
        <div className="container">
            <h2>Categories</h2>

            <ol>
                {
                    categories.slice(0,2).map((category) => {
                        return(
                            <li>{category}</li>
                        );
                    }
                    )
                }
            </ol>
        </div>
    )
}