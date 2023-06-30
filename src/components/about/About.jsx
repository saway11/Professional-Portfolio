import React from 'react';
import './About.css';
import Me from '../../assets/me.png';
import {BiMedal, BiUser, BiFolder} from 'react-icons/bi';

const About = () => {
    return (
        <section id='about'>
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="A picture of Rosa"/>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <BiMedal className='about__icon'/>
                            <h5>Experience</h5>
                            <small>Calaveras County Health and Human Services <br/> San Mateo Human Services</small>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}