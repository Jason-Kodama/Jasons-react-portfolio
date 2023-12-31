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
                    Download my <a href="https://drive.google.com/file/d/1YfH60pTFULOv6oWQFb_2Zty_koO6ZFZ9/view?usp=sharing">resume</a>
                </p>
            </div>
        </section>
    );
}

export default Resume;