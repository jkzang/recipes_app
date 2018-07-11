import React, { Component } from 'react';
import recipes from '../store/Recipes'
import { Link } from 'react-router-dom'

class RecipeIndex extends Component {
    componentWillMount(){
        this.setState({recipes: recipes})
    }
    render(){
    console.log(this.state.recipes[0].id);
    console.log(this.state.recipes[1].id);
        return (
            <div>
                <h1>You Are On The Recipes Index Page</h1>
                <p>These are the recipes: </p>
                    <ul>
                        <li>
                            <Link to = {`/index/${this.state.recipes[0].id}`}>
                                {this.state.recipes[0].name}
                            </Link>
                        </li>
                        <li>
                        <Link to = {`/index/${this.state.recipes[1].id}`}>
                            {this.state.recipes[1].name}
                        </Link>
                        </li>
                    </ul>
            </div>
        );
    }
}

export default RecipeIndex
