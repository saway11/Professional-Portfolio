import React from 'react';
import selfie from '';
import './'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <div className='rosa-pic title'>
                    <img className="" src={selfie} alt="Rosa Picture" />
                </div>
                <div className="words">
                    <div className='aboutSection'>
                        <div className='aboutPod'>
                            <h3>About Me</h3>
                            <p>My name is Rosa and I'm a full stack web developer in the 
                                Stockton Area. I enjoy building web apps, big and small.
                                If you are a small business looking for a website, or a
                                buisness looking to hire, please reach out!
                            </p>
                        </div>
                        <div className='aboutPod'>
                            <h3>Skills</h3>
                            <img src="im" alt=""/>
                            <ul>
                                <li>MongoDB</li>
                                <li>Express</li>
                                <li>React</li>
                                <li>Node</li>
                                <li>JavaScript</li>
                                <li>CSS</li>
                                <li>Webpack</li>
                                <li>JQuery</li>
                                <li>Bootstrap</li>
                                <li>Handlebars</li>
                                <li>MySQL</li>
                                <li>Git</li>
                                <li>HTML</li>  
                            </ul>
                        </div>
                        <div className='aboutPod'>
                            <h3>Who am I?</h3>
                            <p>I'm a person who is eager to share innovative ideas with others.
                                In my free time I enjoy reading about and experimenting with
                                new frameworks and technologies. I enjoy collaborating with 
                                other developers and sharing amongst one another innovative
                                ideas for projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
