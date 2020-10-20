import React from "react";

const Fill=(props)=>{
    return(
        <>
        <div className="container fill">
            <div className="row ">
                <div className="col-md-6 mx-auto align-self-baseline">
                    <h1>{props.val1}</h1>
                </div>
            </div>
        </div>
        </>
    );
}
export default Fill;