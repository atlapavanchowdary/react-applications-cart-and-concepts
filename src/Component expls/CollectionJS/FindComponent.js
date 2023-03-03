export default function FindComponent(){
    var categories = ["All","Electronics","Footwear"];
    return(
        <div className="container">
            <ol>
            {
                categories.find(element => element.includes('o'))
            }
            </ol>

        </div>
    )
}