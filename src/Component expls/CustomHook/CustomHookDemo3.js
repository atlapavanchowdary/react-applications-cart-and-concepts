import { useSort } from "../ReactHook/useSort";

export default function UseSortComponent(){
    const display = useSort(["D","E","C","A","B"]);
    
    return(
        <div>
            <h2>Sorted order is:</h2>
            <hr/>
            <h6>{display}</h6>
        </div>
    )
}