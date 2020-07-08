import React from 'react';
import "./Nav.css"
import '../../App.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';

function Nav() {
    return (
        <Router>
            <div className='Nav'>
                <nav>
                    <h1>Corona Virus Tracker</h1>
                    <ul className='unorderedList'>
                        <Link className='navBar' to='/'>
                            <li><button>Home</button></li>
                        </Link>
                        <Link className='navBar' to='/countries'>
                            <li><button>Countries</button></li>
                        </Link>
                    </ul>
                </nav>
            </div>
        </Router>
    );
}

export default Nav;
