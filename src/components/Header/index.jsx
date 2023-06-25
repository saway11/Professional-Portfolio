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
            <nav className='sm-nav'>
                <div className="navbar">
                    <div className="dropdown">
                        <button className='dropbtn'>Dropdown
                        <li className="fa fa-caret-down"></li>
                        </button>
                        <div className="dropdown-content">
                            {categories.map((category) => {
                                return <span key={category.name} style={{ cursor: 'pointer' }} className="menu-item"
                                onClick={() => {
                                    setCurrentCategory(category);
                                }}
                                >{category.name}<br /></span>
                            })}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;