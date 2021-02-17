import React from 'react';
import CartCard from '../Components/CartCard.js';

class CartContainer extends React.Component {
    // state may go in app - then it would become a prop
    state = {
        cartApi: []
    }

    renderCarts = () => {
        return this.state.cartApi.map((el) => <CartCard key={el.id} cart={el} clickHandler={this.props.clickHandler} cartDeleteHandler={this.props.cartDeleteHandler} />)
    }
    render(){
        return(
            <div>
                Cart Container
                {this.renderCarts()}
            </div>
        )
    }
}

export default CartContainer;