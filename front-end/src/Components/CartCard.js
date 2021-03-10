import React from 'react';

class CartCard extends React.Component {

    state = {
        token: {token_type: "Bearer", expires_in: 31349} 
        // , access_token: ""},
    }

    // Fetch: POST request for API to generate a new token for us
    
    componentDidMount() {
        let key = "ATcz3SQZdZn-AYW0WsGeaF5ANaB8noEFL16ZUSby_914vGTIJR1HKAqzW1Ki5JUdkKuBQkt6rxxCHijK"
        let secret = "EDnEnVPzwA-T72CuUXAtxydwvvcD0CyZaZoiJLhL3ba7tF3xW42SW52RvAvXD7j6nzA2iS_XiYgT8XwO"

        fetch("https://api.sandbox.paypal.com/v1/oauth2/token", {
            method: "POST",
            body: "grant_type=client_credentials&client_id=" + key + "&client_secret=" + secret,
            headers: {
            "content-type": "application/json"
        }
      })
      .then(response => response.json())
      .then(data => this.setState({token: data}))
    }

    localDeleteHandler = (e) => {
        this.props.cartDeleteHandler(this.props.cart)
    }

    render(){
        console.log("To Get Token: ", this.state.token)
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