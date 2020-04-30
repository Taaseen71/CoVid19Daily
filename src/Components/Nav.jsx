import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className='Nav'>
            <nav>
                <h1 id="title">Corona Virus Tracker</h1>
                <ul className='unorderedList'>
                    <Link className='navBar' to='/'>
                        <li><button className="buttonHome">Global</button></li>
                    </Link>
                    <Link className='navBar' to='/countries'>
                        <li><button className="buttonCountry">Countries</button></li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
