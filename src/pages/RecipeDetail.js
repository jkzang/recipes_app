import React, { Component } from 'react';
import recipes from '../store/Recipes'
import { Link } from 'react-router-dom'

class Home extends Component {

    render() {
        return (
            <div>
            
                <h1>You Are On the Recipes Detail Page!</ h1>

                <p>{this.props.name}</p>
                <p

            </div>

        );
    }
}

export default Home;
