import React from 'react';

function RightImage({
  imageURL,
  ProductName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  }) {
    return ( 
       <div className="container mt-5">
       <div className="row p-5">
        <div className="col-6 p-5 mt-5">
            <img src={imageURL}/>
        </div>
        <div className="col-6 p-5 mt-5">
            <h1>{ProductName}</h1>
            <p>{productDescription}</p>
            <div >
            <a href={tryDemo}>tryDemo</a>
            <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
            </div>
            <div className="mt-3 p-5">
            <a href={googlePlay}><img src="media/images/google-play-badge.svg"/></a>
            <a href={appStore} style={{marginLeft:"50px"}}><img src="media/images/appstore-badge.svg"/></a>
            </div>
        </div>
    </div>
      </div>
     );
}

export default RightImage;