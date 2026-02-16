import React from 'react';

function Console({
  imageURL,
  ProductName,
  productDescription,
  tryDemo,
  learnMore,
  
  }) {
    return <div className="container">
    <div className="row align-items-center">
         <div className="col-6 p-5 mt-5 ">
            <h1>{ProductName}</h1>
            <p>{productDescription}</p>
            <div>
            <a href={learnMore} style={{marginLeft:"0px"}}>Learn More</a>
            </div>
            
        </div>
        <div className="col-6 p-5">
            <img src={imageURL}/>
        </div>
       
    </div>
  </div>
}

export default Console;