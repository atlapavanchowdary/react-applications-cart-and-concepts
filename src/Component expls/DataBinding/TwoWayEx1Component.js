import { useState } from "react";

export default function TwoWayEx1Component(){
    const [getName, setName] = useState('TV');
    return(
        <div className="container">
            {getName}
        </div>
    )
}