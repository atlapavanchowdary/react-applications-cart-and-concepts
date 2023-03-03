import React from "react";

export default class ShoppingClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            products: [],
            cartItems: [],
            itemsCount: 0,
            totalPrice: 0
        }
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleAddtoCart = this.handleAddtoCart.bind(this);
        this.updateCartData = this.updateCartData.bind(this);
        // this.handleRemovefromCart = this.handleRemovefromCart.bind(this);
        // this.deleteall = this.deleteall.bind(this);
    }

    GetCartItemsCount() {
        this.setState({
            itemsCount: this.state.cartItems.length
        })
    }

    calculateTotalPrice() {
        let total = 0;

        for (const item of this.state.cartItems) {
            total = total + item.price;
        }

        this.setState({
            totalPrice: total
        })
    }

    deleteall = () => {
        alert("Items deleted from cart");
        // let CartItems = this.state.cartItems;
        // console.log(CartItems, "display items");

        let CartItems = this.state.cartItems.filter(product => {
            return product.id === undefined;
        })

        console.log(CartItems, "Delete all cart data");

        // this.setState({
        //     cartItems: CartItems
        // })

        // this.GetCartItemsCount();
        // this.calculateTotalPrice();
        // this.getCategories();
    }

    getCategories() {
        fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => {
                data.unshift('all');
                this.setState({
                    categories: data
                })
            })
    }

    getProducts(url) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    products: data
                })
            })
    }

    componentDidMount() {
        this.getCategories();
        this.getProducts('https://fakestoreapi.com/products');
    }

    handleCategoryChange(e) {
        if (e.target.value === 'all') {
            this.getProducts("https://fakestoreapi.com/products");
        }
        else {
            this.getProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }

    handleAddtoCart(e) {
        alert("Item added to cart");
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data, "This is data debugger");
                let items = this.state.cartItems;
                items.push(data);
                this.setState({
                    cartItems: items
                });
                this.GetCartItemsCount();
                this.getCategories();
                this.calculateTotalPrice();
                console.log(this.state.cartItems, "Present items count");
            })
    }

    updateCartData(e) {
        let CartItems = this.state.cartItems;
        console.log(CartItems, "display items");
        let items = CartItems.filter(product => {
            return product.id !== e.id;
        });
        console.log(items, "Update display");
        this.setState({
            cartItems: items
        })
    }

    handleRemovefromCart(id) {
        alert("Item removed from cart");
        console.log(id, "this is")
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data, "Handle remove from cart");
                this.updateCartData(data);
                this.GetCartItemsCount();
                this.getCategories();
                this.calculateTotalPrice();
                console.log(this.state.cartItems, "Present items count");
            })
    }



    render() {
        return (
            <div className="container-fluid">
                <header className="bg-danger p-2 text-white text-centre">
                    <h2><span className="bi bi-cart"></span>Shopping Cart</h2>
                </header>

                <section className="row mt-3">
                    <nav className="col-0 mb-3">
                        <h2>Select Category</h2>

                        <select onChange={this.handleCategoryChange} className="form-select">
                            {
                                this.state.categories.map(category =>
                                    <option key={category}>{category}</option>
                                )
                            }
                        </select>
                    </nav>

                    <main className="col-7">
                        <div className="d-flex flex-wrap overflow-auto" style={{ height: '600px' }}>
                            {
                                this.state.products.map(product =>
                                    <div key={product.id} className="card m-1 p-1" style={{ width: "200px" }}>
                                        <img src={product.image} className="card-img-top" alt="img" height="150" />

                                        <div className="card-header" style={{ height: '160px' }}>
                                            <p>{product.title}</p>
                                        </div>

                                        <div className="card-body">
                                            <dl>
                                                <dt>Price</dt>
                                                <dd>{product.price}</dd>
                                                <dt>Rating</dt>

                                                <dd>
                                                    <span className="bi bi-star-fill text-success"></span>
                                                    {product.rating.rate}<span>[{product.rating.count}]</span>
                                                </dd>
                                            </dl>
                                        </div>

                                        <div className="card-footer">
                                            <button id={product.id} onClick={this.handleAddtoCart} className="btn btn-danger w-100">
                                                <span className="bi bi-cart4"></span>Add to Cart
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </main>

                    <aside className="col-5">
                        <button className="btn btn-danger w-100">
                            <span className="bi bi-cart4"></span>[{this.state.itemsCount}]Your Cart Items
                        </button>

                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Preview</th>
                                    <th className="btn btn-danger bi-trash w-75 ms-2 mt-1" id="deleteall" onClick={this.deleteall} style={{ height: '40px' }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.cartItems.map(item =>
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>

                                        <td>
                                            <img src={item.image} alt="img" width="50" height="50" />
                                        </td>

                                        <td>
                                            <button className="btn btn-danger" id={item.id} onClick={this.handleRemovefromCart.bind(this, item.id)}>
                                                <span className="bi bi-trash"></span>
                                            </button>
                                        </td>
                                    </tr>
                                )
                                }
                                <tr>
                                    <td>Total: {this.state.totalPrice}</td>
                                </tr>
                            </tbody>
                        </table>
                    </aside>

                </section>
            </div>
        )
    }
}