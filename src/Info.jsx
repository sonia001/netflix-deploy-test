import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


const Info=(props)=>{
    
    const info1=props.location.state;
    const [info,setInfo]=useState([]);
    const url="http://image.tmdb.org/t/p/w185";
    
    useEffect(()=>{
        getInfo();
    },[])
    const getInfo=async(e)=>{
        const result=await axios.get(`https://api.themoviedb.org/3/movie/${info1.id}?api_key=2b9911b777000a14126dc1f921515408&append_to_response=videos`);
        console.log(result.data);
        setInfo(result.data);
      }

    
    return(
        <>
           <div className="container info">
           <div className="row display-flex align-items-center row-info">
                <div className="col-md-6 my-4 mx-auto col-info">
                    <div className="card card-1">
                        <img src={ url + info.poster_path} alt="movie"/>
                        <div className="card-title my-2 ml-4">
                        <h5>{info.title}</h5>
                        <p className="h6 font-weight-normal">Release Date: {info.release_date}</p>
                        <p className="h6 font-weight-normal">{info.runtime} min</p>
                        </div>
                        <div className="card-body text-justify">
                        <p className="h6 font-weight-normal">{info.overview}</p>
                        <a href={info.homepage} target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-dark"> Play </button></a>
                        <NavLink to="/"><button className="btn btn-outline-dark ml-4"> Back </button></NavLink>
                        </div>
                    </div>
                </div>
           </div>
           </div>
    
        </>
    );
}
export default Info;