import { Container } from '@material-ui/core';
import React from 'react';
import CartCard from '../Components/CartCard.js';

class CartContainer extends React.Component {

    renderCarts = () => {
        return this.props.carts.map((el) => <CartCard key={el.id} cart={el} cartDeleteHandler={this.props.cartDeleteHandler} />)
    }

    render(){
        if(!this.props.carts){
            return <h1>Cart Is Loading...</h1>
        }
        return(
            <div>
                Cart Container
                {this.renderCarts()}
            </div>
        )
    }
}

export default CartContainer;