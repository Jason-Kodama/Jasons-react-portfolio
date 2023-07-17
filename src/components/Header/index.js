import React from 'react';

function Header(props) {
    return (
        <header className='heading'>
            <h1>Kentaro Jason Kodama</h1>
            {props.children}
        </header>
    )
}

export default Header;