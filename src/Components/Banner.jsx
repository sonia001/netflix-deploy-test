import React from 'react';

const Banner=(props)=>{


return(
  <>
    <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 banner">
      <div className="input-group mb-3 mx-auto">
        <input type="text" 
               className="form-control" 
               placeholder="Search Your Movie.." 
               aria-label="Recipient's username" 
               aria-describedby="basic-addon2"
               value={props.search}
               onChange={props.inputEvent}
               />
        <div className="input-group-append">
            <button className="btn btn-dark" onClick={props.showResult}>Search movie</button>
        </div>
        </div>
      </div>
  </div>
  </div>
  </>
);
}
export default Banner;
