// import TestCard from './Components/TestCard.js';
import React from 'react';
import UserContainer from './Containers/UserContainer.js';
import CartContainer from './Containers/CartContainer.js';
import FavoriteContainer from './Containers/FavoriteContainer.js';
import ProductContainer from './Containers/ProductContainer.js';

class App extends React.Component {

  render(){
    return(
      <div className="App">
        {/* <TestCard /> */}
        <UserContainer />
        <CartContainer />
        <FavoriteContainer />
        <ProductContainer />
      </div>
    )
  }
}

export default App;