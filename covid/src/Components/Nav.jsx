import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className='Nav'>
            <nav>
                <h1>Corona Virus Tracker</h1>
                <ul className='unorderedList'>
                    <Link className='navBar' to='/'>
                        <li>Home</li>
                    </Link>
                    <Link className='navBar' to='/countries'>
                        <li>Countries</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
