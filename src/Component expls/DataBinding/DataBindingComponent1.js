export default function DataBindingComponent_1(){
    var size={
        width: 450,
        height: 100
    }

    return(
        <div className="container">
            <h2>Property Binding</h2>
            <table border="1" width={size.width}>
                <tr>
                    <td>Welcome to React</td>
                </tr>
            </table>
        </div>
    )
}