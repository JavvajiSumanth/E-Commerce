import React from 'react';
import home from '../assets/home.png';

const Home = () => {
    return ( 
        <div className="home">
            <div className="background" style={{ backgroundImage: `url(${home})` }}>
                {/* Content inside the background */}
                <h1 className="home-text">Find Parts For Your Vehicle</h1>
                <p className="home-text">Over hundreds of brands and tens of thousands of parts</p>

            </div>
            <div className="search-items">
                
            </div>
        </div>
     );
}
 
export default Home;
