import React from 'react';

class CartCard extends React.Component {
        // add serialiers to access a carted product

        localDeleteHandler = (e) => {
            this.props.cartDeleteHandler(this.props.cart)
        }

    render(){
        let { name, image } = this.props.cart
        return(
            <div>
                <h1>{name}</h1>
                <img>{image}</img>
                <br></br><br></br>
                <button onClick={this.localDeleteHandler}>❌</button>
            </div>     
        )
    }
}

export default CartCard;