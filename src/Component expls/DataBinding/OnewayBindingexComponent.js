export default function OnewayBindingexComponent(){
    var username="John";

    return(
        <div className="container">
            <h2>User details</h2>
            User Name:
            <input type="text" value={username}/>
            <br/>
            Hello!{username}
        </div>
    )
}