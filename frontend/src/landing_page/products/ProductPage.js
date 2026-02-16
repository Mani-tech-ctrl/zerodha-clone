import React from 'react';
import Hero from './Hero.js';
import Leftimage from './LeftImage.js';
import Rightimage from './RightImage.js';
import Universe from './Universe.js';
import Console from './Console.js';
import Kite from './KiteConnect.js';
import KiteApp from './KiteApp.js';

function ProductPage() {
    return ( 
        <>
        <Hero/>
        <Leftimage imageURL="/media/images/products-kite.png"

         ProductName="Kite"
         productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
         tryDemo=""
         learnMore=""
         googlePlay=""
         appStore=""/>
         

        <Console imageURL="/media/images/products-console.png"

         ProductName="Console"
         productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
         learnMore=""
         />

      
        <Rightimage imageURL="/media/images/products-coin.png"

         ProductName="Coin"
         productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
         tryDemo=""
         />
         
        

        
         <KiteApp imageURL="/media/images/landing.svg"

         ProductName="Kite Connect API"
         productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
         KiteConnect="" 
         
         />

         

         <Kite imageURL="/media/images/varsity-products.svg"

         ProductName="Varsity mobile"
         productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
         googlePlay=""
         appStore=""
         />

         <p className='text-center'>Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>

         <Universe 
         />
        </>
     
        
     );
}

export default ProductPage;