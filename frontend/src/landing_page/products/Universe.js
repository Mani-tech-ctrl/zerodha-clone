import React from 'react';

function Universe(
     imageURL,
  ProductName,
  productDescription,
  KiteConnect
) {
    return ( 
        <div className="container mt-5">
       <div className="row text-center">
        <h1>The Zerodha Universe
</h1>
        <p>Extend your trading and investment experience even further with our partner platforms

</p>
       <div className='row'>
       <div className="col-4 p-3">
        <img src="media/images/zerodhafundhouse (1).png" className= "imgLogo"/>
        <p className='text'>Our asset management venture thst is creating simple and transparent index funds to help you save for your goals.</p>
       </div>

       <div className="col-4 p-3">
        <img src="media/images/sensibull-logo.svg" className= "imgLogo"/>
        <p className='text'>Strategy Builder, Practice Trade / Draft Portfolios, Free Option Chain, Open Interest, Free Market Analysis, FII DII Data, Positions Analysis, and much more</p>
       </div>

       <div className="col-4 p-3">
        <img src="media/images/tijori.svg" className= "imgLogo"/>
        <p className='text'>Investment research platform that offers detailed insights on stocks, sectors, supply chain and more</p>
       </div>
       </div>

       <div className='row'>
       <div className="col-4 p-3">
        <img src="media/images/streak-logo.png" className= "imgLogo"/>
        <p className='text'>Our asset management venture thst is creating simple and transparent index funds to help you save for your goals.</p>
       </div>

       <div className="col-4 p-3">
        <img src="media/images/smallcase-logo.png" className= "imgLogo"/>
        <p className='text'>Strategy Builder, Practice Trade / Draft Portfolios, Free Option Chain, Open Interest, Free Market Analysis, FII DII Data, Positions Analysis, and much more</p>
       </div>

       <div className="col-4 p-3 " >
        <img src="media/images/ditto-logo.png"  className= "imgLogo" />
        <p className='text'>Investment research platform that offers detailed insights on stocks, sectors, supply chain and more</p>
       </div>
       </div>
        
    </div>
      </div>
     );
}

export default Universe;