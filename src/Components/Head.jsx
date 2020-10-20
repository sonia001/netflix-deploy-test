import React from "react";

const Head=(props)=>{
    return(
        <>
        <div className="container-fluid">
        <h3 style={{"color":"white"}}>Top {props.name} Movies</h3>
        </div>
        </>
    );
}
export default Head;