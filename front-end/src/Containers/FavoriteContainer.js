import React from 'react';
import FavoriteCard from '../Components/FavoriteCard.js';

class FavoriteContainer extends React.Component {
    // state may go in app - then it would become a prop
    state = {
        favoriteApi: []
    }

    renderFavorites = () => {
        return this.state.favoriteApi.map((el) => <FavoriteCard key={el.id} favorite={el} favoriteDeleteHandler={this.props.favoriteDeleteHandler} />)

    }

    render(){
        return(
            <div>
                Favorite Container
                {this.renderFavorites()}
            </div>
        )
    }
}

export default FavoriteContainer;