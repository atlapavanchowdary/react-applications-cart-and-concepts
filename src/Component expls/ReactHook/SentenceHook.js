import { useState, useEffect } from "react";

export function SentenceHook(txt){
    var [sentence, setsentence] = useState("");

    useEffect(()=>{
        setsentence(txt.charAt(0).toUpperCase()+txt.substring(1).toLowerCase());
    },[])
    return sentence;
}