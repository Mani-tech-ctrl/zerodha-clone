import React from 'react';

function Hero() {
    return ( 
        <div className="container" >
        <div >
      <div className="row" >
        <div className="col">
          <h3>Support Portal</h3>
        </div>

        <div className="col" style={{ textAlign: "right", color: "" }}>
          <button
            className="p-2 btn btn-primary fs-6"
            style={{ width: "25%", margin: "0 auto" }}
          >
            Create Tickets
          </button>
        </div>
      </div>
      <div className="row">
        <div className="input-group">
          <span className="input-group-text">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>

          <input
            type="search"
            className="form-control form-control-lg"
            placeholder="Search..."
          />
        </div>
      </div>
      </div>
    </div>
     );
}

export default Hero;