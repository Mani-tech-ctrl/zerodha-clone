import React from 'react';

function kite(
    {
  imageURL,
  ProductName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  }
) {
    return ( 
    <div className="container">
    <div className="row p-5">
        <div className="col-6 p-5">
            <img src={imageURL} style={{marginLeft:"50px"}}/>
        </div>
        <div className="col-6 p-5 mt-5">
            <h1>{ProductName}</h1>
            <p>{productDescription}</p>
            <div>
            <a href={googlePlay}><img src="media/images/google-play-badge.svg"/></a>
            <a href={appStore} style={{marginLeft:"50px"}}><img src="media/images/appstore-badge.svg"/></a>
            </div>
        </div>
    </div>
  </div>
    );
}

export default kite;