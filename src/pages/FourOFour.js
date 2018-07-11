import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Four extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>You are lost</li>

                        <li><Link to="/">HOME</Link></li>

                    </ul>
                </nav>
            </div>
        );
    }
}

export default Four;
