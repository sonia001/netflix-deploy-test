import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";


const Info=(props)=>{
    
    const genre=props.location.state;
    const [inform,setInform]=useState([]);
    const url="http://image.tmdb.org/t/p/w185";
    useEffect(()=>{
        getInform();
    },[])
    const getInform=async()=>{
        const result=await axios.get(`https://api.themoviedb.org/3/movie/${genre.id}?api_key=2b9911b777000a14126dc1f921515408&append_to_response=videos`);
        setInform(result.data);
      }

    return(
        <>
           <div className="container info">
           <div className="row display-flex align-items-center row-info">
                <div className="col-md-6 my-4 mx-auto col-info">
                    <div className="card card-1">
                        <img src={ url + inform.poster_path} alt="movie"/>
                        <div className="card-title my-2 ml-4">
                        <h5>{inform.title}</h5>
                        <p className="h6 font-weight-normal">Release Date: {inform.release_date}</p>
                        <p className="h6 font-weight-normal">{inform.runtime} min</p>
                        </div>
                        <div className="card-body text-justify">
                        <p className="h6 font-weight-normal">{inform.overview}</p>
                        <a href={inform.homepage} target="_blank" rel="noopener noreferrer"><button className="btn btn-outline-dark"> Play </button></a>
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