import React, { Component } from 'react';
import recipes from '../store/Recipes'
import { Link } from 'react-router-dom'

class RecipeIndex extends Component {
    componentWillMount(){
        this.setState({recipes: recipes})
    }
    render() {
        return (
            <div>
                <h1>You Are On The Recipes Index Page</h1>
                <p>These are the recipes: </p>
                    <ul>
                        <li>{this.state.recipes[0].name}</li>
                        <li>{this.state.recipes[1].name}</li>
                    </ul>
            </div>
        );
    }
}

export default RecipeIndex
