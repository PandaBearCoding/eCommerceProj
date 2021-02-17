// import TestCard from './Components/TestCard.js';
import React from 'react';
import UserContainer from './Containers/UserContainer.js';
import CartContainer from './Containers/CartContainer.js';
import FavoriteContainer from './Containers/FavoriteContainer.js';
import ProductContainer from './Containers/ProductContainer.js';

class App extends React.Component {
  
  // current user will need to be held in state in order to access their favorites/cart
  state = {
    user: {}
  }

  // will need to fetch current user to access their favorites/cart
  componentDidMount(){
    fetch("http://localhost:3001/users/1")
    .then(resp => resp.json())
    .then(user => (this.setState({user: user})))
    .catch(console.log)
  }

  cartDeleteHandler = (cartObj) => {
    console.log("Cart Item To Delete", cartObj.id)
    let relationship = this.state.user.carts.find(cart => cart.id && cart.user_id === this.state.user.id && cart.product_id === cartObj.id)
    console.log("Relationship", relationship)
    fetch(`http://localhost:3001/users/${this.state.user.id}/carts/${relationship.id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(response => {
      let newCartedItemssArray = this.state.user.carted_items.filter(cartedItems => cartedItems.id !== cartObj.id)
      let newCartsArray = this.state.user.carts.filter(cart => cart.id !== relationship.id)
      this.setState({user: {...this.state.user, carted_items: newCartedItemssArray, carts: newCartsArray}})
    })
  }
      


  // :favorited_items


  render(){
    return(
      <div className="App">
        {/* <TestCard /> */}
        <UserContainer />
        <CartContainer  carts={this.state.user.carted_items} cartDeleteHandler={this.cartDeleteHandler} />
        <FavoriteContainer />
        <ProductContainer />
      </div>
    )
  }
}

export default App;