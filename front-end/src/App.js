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
  // componentDidMount(){
  //   fetch(`http://localhost:3001/users/${user.id}`)
  //   .then(resp => resp.json())
  //   .then(user => (this.setState({user: user})))
  //   .catch(console.log)
  // }

  matchDeleteHandler = (cartObj) => {
    console.log("Cart Item To Delete", cartObj.id)
  }

  render(){
    return(
      <div className="App">
        {/* <TestCard /> */}
        <UserContainer />
        <CartContainer cartDeleteHandler={this.cartDeleteHandler} />
        <FavoriteContainer />
        <ProductContainer />
      </div>
    )
  }
}

export default App;