import React from 'react';
import './style.css'

const Header = (props) => {
    const {
        categories = [],
        setCurrentCategory
    } = props;

    return (
        <header>
            <h1> Rosa Garcia </h1>
            <nav className='lg-nav'>
                <ul>
                    <p className="menu-btn">Menu</p>
                    {categories.map((category) => {
                        return <li className="menu-item" key={category.name}>
                            <span style={{ cursor: 'pointer' }} className="menu-item" 
                            onClick={() => {
                                setCurrentCategory(category);
                            }}
                            >{category.name}</span>
                        </li>
                    })}
                </ul>
            </nav>
            
        </header>
    )
}