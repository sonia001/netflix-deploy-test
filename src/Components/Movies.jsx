import React from 'react';

import { Link} from 'react-router-dom';

const Movies=(props)=>{
 
 const {movie}=props;
 const url="http://image.tmdb.org/t/p/w154";
 
return(
  <>
  
  
  <div className="row ">
      {
          movie.map((val)=>(
                <div className="col-md-3 my-4">
                    <div className="card">
                        <img src={ url + val.poster_path} alt="movie"/>
                        <div className="card-title my-2 ">
                        <h5>{val.title}</h5>
                        </div>
                        <Link to={{pathname:`/info/${val.id}`, state: {id:val.id}}}>
                        <button className="btn btn-outline-dark"> 
                        View </button></Link>
                        </div>
                </div>
          ))
      }
  </div>
  </>
);
}
export default Movies;
