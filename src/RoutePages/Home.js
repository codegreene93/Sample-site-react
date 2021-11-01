import React from 'react';
import mainHeader from '../main-header.jpg';
import Cynet from '../cynet.png';


const Home = () => {
    return(
        <>
            <div className="header-home">
                <h1>Find Out what we do...</h1>
                <button>Find out more</button>
                <img src={mainHeader} alt="Main Header" />
            </div>
            <div className="serviceList-home">
                <h3>Find out about our range of services we can offer</h3>
                <ul>
                    <li>Cyber Security</li>
                        <button>Explore</button>
                    <li>Web Development</li>
                        <button>Explore</button>
                    <li>Software Development</li>
                        <button>Explore</button>
                    <li>Networking</li>
                        <button>Explore</button>
                    <li>Cloud Computing</li>
                        <button>Explore</button>
                </ul>
            </div>

            <div className="partners-home">
                <a href="https://www.cynet.com/">
                    <img src={Cynet} alt="Cynet Logo" />
                </a>
            </div>

           
        </>
    )
}

export default Home;