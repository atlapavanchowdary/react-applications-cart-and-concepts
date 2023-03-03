export default function DataBindingComponent(){
    var product = {
        Name: 'Samsung TV',
        Price: 45005.45,
        Stock: true
    }
    return( 
        <div className="container">
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd><input type="text" className="form-control" value={product.Name}/></dd>

                <dt>Price</dt>
                <dd>{product.Price}</dd>

                <dt>Stock</dt>
                <dd>{(product.Stock == true)? "Available" : "Out of Stock"}</dd>
            </dl>
        </div>
    )
}