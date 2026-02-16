import React from "react";

function Team() {
  return (

    <div className="container ">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-3 text-center">
          People
        </h1>
      </div>
      <div className="mb-3">
        <div className="row p=5 mt-4 border-top text-muted fs-6" style={{lineHeight:"1.8", fontSize:"1.2em"}}>
         <div className="col-6 nithin text-center">
          <img src="media/images/nithinKamath.jpg"/>
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
         </div>
            <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
           Playing basketball is his zen.
          </p>
          <p>Connect on <a href="" style={{textDecoration:"none"}} >Homepage / TradingQnA / Twitter</a></p>
          </div>
        </div>
      </div>
    </div>


    
  );
}

export default Team;
