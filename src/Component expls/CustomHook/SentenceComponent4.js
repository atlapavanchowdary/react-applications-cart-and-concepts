import { SentenceHook } from "../ReactHook/SentenceHook";

export default function SentenceComponent(){
    const finalString = SentenceHook("wElcOME to HtML");

    return(
        <div>
            <h2>Final String is:</h2>
            <h3>{finalString}</h3>
        </div>
    )
}