import React from 'react';
import chefImage from '../../assets/images/nobu.JPG'

function About() {
    return (
        <section className='my-5'>
            <div className='about-me'>
                <img src={chefImage} alt='chef'></img>
                <p>I am a junior developer that is passionate about learning to code.  Currently, the only experience I have is the bootcamp.
                    I graduated from the University of California Riverside in 2018 with Bachelors in economics. In 2010, I moved to Tokyo, Japan to learn the authenic culinary arts of Japanese cuisine. In 2012, I graduated from a Japanese culinary school majoring in traditional Japanese cuisine. Since, then I have worked in kitchens in Los Angeles, Turkey, and Denver as a sushi chef and worked my way up to a Sous Chef.
                </p>

                <p>I have always been into computers growing up and decided to change careers into coding.  Something about being able to develop a website and understanding the functionalities of servers and applications have always been an interest of mine.  I would love to progress as a developer and see how far I will be able to take my skills</p>
            </div>
        </section>
    )
}

export default About;