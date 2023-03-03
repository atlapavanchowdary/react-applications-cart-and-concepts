import { useState, useEffect } from "react";

export function useSort(items){
    var [sort, setSort]= useState([]);

    useEffect(()=>{
        setSort(items.sort());
    },[])
    return sort;
}