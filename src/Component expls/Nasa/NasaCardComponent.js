import {useState, useEffect} from "react";

export default function NasaCardComponent(){
    const[mars,setMars]=useState([]);

    useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(response => response.json())
        .then(data => {
            setMars(data.photos);
        })
    },[])

    return(
        <div className="container">
            <h2>Mars photos</h2>
            <div className = "d-flex flex-wrap">
                {
                    mars.map(photo =>
                        <div className="card p-2 m-2 w-25">
                            <img src={photo.img_src} alt="img" className="card-img-top" height="150"/>
                            <div className="card-header">
                                <h2>{photo.camera.full_name}</h2>
                            </div>
                            <div className="card-body">
                                <p>{photo.rover.name}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}