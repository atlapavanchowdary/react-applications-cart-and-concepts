import { useState } from "react";

export default function TwowayBindingexComponent(){
    const[userName, setUserName] = useState("John");

    function handleUserName(e){
        setUserName(e.target.value);
    }

    return(
        <div className="container-fluid">
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={handleUserName}/></dd>
            </dl>

            <h3>Hello! {userName}</h3>

        </div>
    )
}