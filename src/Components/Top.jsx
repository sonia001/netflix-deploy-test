import React from "react";
import { Link } from "react-router-dom";

const Top=(props)=>{
    const {top}=props;
    

    const url="http://image.tmdb.org/t/p/w185";
    return(
        <>
           {
               top.map((topmovie)=>(

                <Link to={{pathname:`/genre/${topmovie.id}`, state: {id:topmovie.id}}}>
               <div className="center-box">
                <img src={url + topmovie.poster_path} alt="top" />
              </div>
              </Link>
               ))
           }

        </>
    );
}
export default Top;