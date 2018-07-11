import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/index">RECIPE INDEX</Link></li>
                        <li><Link to="/details">RECIPE DETAILS</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;
