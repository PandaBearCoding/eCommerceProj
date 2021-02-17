import React from 'react';

class CartCard extends React.Component {

        localDeleteHandler = (e) => {
            this.props.cartDeleteHandler(this.props.cart)
        }

    render(){
        // console.log("CART PROPS", this.props.cart)
        let { name, image } = this.props.cart
        return(
            <div>
                <h1>{name}</h1>
                <img alt="" src={image}/>
                <br></br><br></br>
                <button onClick={this.localDeleteHandler}>❌</button>
            </div>     
        )
    }
}

export default CartCard;