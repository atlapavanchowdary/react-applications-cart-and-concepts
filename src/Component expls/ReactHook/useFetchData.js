import { useState, useEffect } from "react";

export function useFetchData(url){
    const[data,setData] = useState();
    console.log(url);
    useEffect(()=>{
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setData(data);
        })
        .catch((ex)=>{console.error(ex)});
    },[url])
    return {data}
}