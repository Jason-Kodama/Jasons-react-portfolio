import React from 'react';

function Footer() {
    const icons = [
        {
            name: "fab fa-github",
            link: "https://github.com/Jason-Kodama"
        },
        {
            name: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/jason-kodama-6aa25595/"
        }
    ]

    return (
        <footer className='footer'>
            {icons.map(icon =>
            (
            <div className='footerIcon'>
                <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name} devicon-github-original></i></a>
            </div>
            )
            )}
            
        </footer>
    );
}

export default Footer;