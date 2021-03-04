import React from 'react';

class CartCard extends React.Component {

        localDeleteHandler = (e) => {
            this.props.cartDeleteHandler(this.props.cart)
        }

    render(){
        // console.log("CART PROPS", this.props.cart)
        let { name, image } = this.props.cart
        return(
            <div className="cartCard">
                <h1 className="cartCardH1">{name}</h1>
                <img className="cartCardImg" alt="" src={image}/>
                <br></br><br></br>
                <button className="cartCardButton" onClick={this.localDeleteHandler}>❌</button>
            </div>     
        )
    }
}

export default CartCard;