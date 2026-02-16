import React from 'react';

function KiteApp({
  imageURL,
  ProductName,
  productDescription,
  KiteConnect,
  
  }) {
    return <div className="container">
    <div className="row align-items-center">
         <div className="col-6 p-5 mt-5 ">
            <h1>{ProductName}</h1>
            <p>{productDescription}</p>
            <a href='' style={{textDecoration:"none"}}>KiteConnect</a>
            
        </div>
        <div className="col-6 p-5">
            <img src={imageURL}/>
            
        </div>
       
    </div>
  </div>
}

export default KiteApp;