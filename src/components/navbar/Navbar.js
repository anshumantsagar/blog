import React from 'react';

//css
import './Navbar.css';


const navbar = props => {
    return (
        <div className='background'>
            <header>
                <h1 className='fontColor'>Blog</h1>
                <p className='secondoryFont'>Blog your thoughts out</p>
                <nav className='Sitenav'>
                    <ul className='group'>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/portfolio'>Portfolio</a></li>
                        <li><a href='/contact'>Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
};

export default navbar;