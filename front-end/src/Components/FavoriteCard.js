import React from 'react';

class FavoriteCard extends React.Component {

    localDeleteHandler = (e) => {
        this.props.favoriteDeleteHandler(this.props.favorite)
    }

    render(){
        let { name, image } = this.props.favorite
        return(
            <div>
                <h1 className="favoriteCardH1">{name}</h1>
                <img className="favoriteCardImg" alt="" src={image}/>
                <br></br><br></br>
                <button className="favoriteCardButton" onClick={this.localDeleteHandler}>❌</button>
            </div>     
        )
    }
}

export default FavoriteCard;
