import React from "react";

export function NotFound(){
    return(
        <>
            <h1 className="text-center mt-5"> Page Not Found </h1>
            <div className="container w-100 mt-5">
                <img src="images/notfound/notfound.png" className="d-block m-auto" width={1000} />
            </div>
        </>
    ) ; 
}