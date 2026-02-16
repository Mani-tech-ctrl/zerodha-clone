import React from 'react';

function Hero() {
    return ( 
       <div className='container mt-4 p-5'>
        <div className='row text-center mt-4 p-3 border-bottom'>
            <h2>Charges</h2>
            <p>List of all charges and taxes</p>
        </div>
        <div className='row '>
            <div className='col-4 mt-5 p-5'>
                <img src='media/images/pricing-eq.svg'/>
                <h2>Free equity delivery</h2>
                <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>

            </div>
            <div className='col-4 mt-5 p-5 text-center'>
                 <img src='media/images/other-trades.svg'/>
                <h2>Intraday and F&O trades</h2>
                <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>

            </div>
            <div className='col-4 mt-5 p-5'>
                 <img src='media/images/pricing-eq.svg'/>
                <h2>Free direct MF</h2>
                <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>

            </div>
        </div>
       </div>
        
     );
}

export default Hero;