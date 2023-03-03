import { useFetchData } from "../ReactHook/useFetchData";

export default function CustomHookDemo2(){
    const data = useFetchData("http://fakestoreapi.com/products");
    return(
        <div className="container-fluid">
            <h2>Products</h2>
            <ol>
                {
                    data.data.map(product =>
                            <li>{product.title}</li>
                        )
                }
            </ol>
        </div>
    )
}