import React from 'react';

class ProductCard extends React.Component {

    state = {
        clicked: false,
        name: this.props.product.name,
        description: this.props.product.description, 
        price: this.props.product.price, 
        image: this.props.product.image
    }

    updateClickHandler = (e) => {
        this.setState({clicked: true})
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    localUpdateHandler = (e) => {
        e.preventDefault()
        this.props.updateHandler(this.state.id, this.state.name, this.state.description, this.state.price, this.state.image)
        this.setState(previousState => ({
            clicked: !previousState.clicked
        }))
    }

    localDeleteHandler = (e) => {
        this.props.deleteHandler(this.props.product.id)
    }

    render(){
        let { name, description, price, image } = this.props.product
        return(
            <div className="productCard">
                {this.state.clicked ? (
                <form onSubmit={this.localUpdateHandler}>
                    <input name="name" type= "text" value={this.state.name} onChange={this.changeHandler} />
                    <input name="description" type= "text" value={this.state.description} onChange={this.changeHandler} />
                    <input name="price" type="text" value={this.state.price} onChange={this.changeHandler} />
                    <input name="image" type= "text" value={this.state.image} onChange={this.changeHandler} />
                    <button type="submit">Update Product</button>
                </form>
            ) :
            null
            }
                <p>Name: <span>{name}</span></p>
                <img alt="" src={image}/>
                <p>Description: <span>{description}</span></p>
                <p> Price: <span>{price}</span></p>
                <button onClick={this.updateClickHandler}>Edit Product</button>
                <button onClick={this.localDeleteHandler}>Delete Product</button>
            </div>
        )
    }
}

export default ProductCard;
