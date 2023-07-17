import React from 'react';
import homeImage from '../../assets/images/eclipse.avif'

function Home() {
    return (
        <div className='home'>
            <h1>HomePage</h1>
            <img src={homeImage} alt='eclipse'></img>
            <p>heloo</p>
        </div>
    )
}

export default Home;