import React from 'react';
import PageContent from '../PageContent';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';
import Home from '../Home'

function Page({ currentPage }) {
    const renderPage = () => {
        switch (currentPage.name) {
            case 'about me':
                return <About />;
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />;
            case 'resume':
                return <Resume />;
            default:
                return <Home />;
        }
    };

    return (
        <section>
            {/* <h2>{currentPage.name}</h2> */}
            <PageContent>{renderPage()}</PageContent>
        </section>
    );
}

export default Page;