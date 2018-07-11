import React, { Component } from 'react';
import recipes from '../store/Recipes'
import { Link } from 'react-router-dom'

class RecipeDetail extends Component {

    componentWillMount(){
        this.setState({recipes: recipes})
    }

    render() {
        let id = this.props.match.params.id
        return (
            <div>
                <h1>You Are On the Recipe Details Page!</ h1>
                <h1>{this.state.recipes[`${id}`].name}</h1>
                <h1>{this.state.recipes[`${id}`].details}</h1>
            </div>

        );
    }
}

export default RecipeDetail;
