import React from 'react';
import homeImage from '../../assets/images/eclipse.avif'

function Home() {
    return (
        <div className='home row'>
            <div className='column-left'>
                <img src={homeImage} alt='eclipse'></img>
            </div>
            <div className='column-right'>
                <h1>FullStack Developer</h1>                
            </div>
        </div>
    )
}

export default Home;