import React from 'react';
import FavoriteCard from '../Components/FavoriteCard.js';

class FavoriteContainer extends React.Component {
    renderFavorites = () => {
        return this.props.favorites.map((el) => <FavoriteCard key={el.id} favorite={el} favoriteDeleteHandler={this.props.favoriteDeleteHandler} />)

    }

    render(){
        if(!this.props.favorites){
            return <h1>Favorited Are Loading...</h1>
        }
        return(
            <div>
                Favorite Container
                {this.renderFavorites()}
            </div>
        )
    }
}

export default FavoriteContainer;