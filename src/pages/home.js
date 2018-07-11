import React, { Component } from 'react';
import recipes from '../store/Recipes'
import { Link } from 'react-router-dom'

class Home extends Component {

    render() {
        return (
            <div>
                <h1>Welcome to the Recipes App Home Page!</ h1>
            </div>
        );
    }
}

export default Home;
