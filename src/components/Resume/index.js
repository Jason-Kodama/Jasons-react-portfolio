import React from 'react';

function Resume() {
    return (
        <section className='my-5'>
            <div className='my-2 resume'>
                <h3>Front-end Proficiencies</h3>
                <ul className='skills'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h3>Back-end Proficiencies</h3>
                <ul className='skills'>
                    <li>APIS</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
                <p>
                    Download my <a href="https://docs.google.com/document/d/1XEaqtNnKLyFQqhnSWYnnGAxeJ0t0jleR/edit?usp=sharing&ouid=108150057600392130041&rtpof=true&sd=true">resume</a>
                </p>
            </div>
        </section>
    );
}

export default Resume;