import React, { Component } from 'react'
import './productSection.css'


class AddCartButton extends Component{

  constructor (props){
    super(props)
    this.state = {
      basketqty: this.props.basketqty
    }
  }

  incrementBasketQty = () => {
    this.setState({
      basketqty: this.state.basketqty + 1
    })
  }

  decrementBasketQty = () => {
    this.setState({
      basketqty: this.state.basketqty - 1
    })
  }

  render(){
    if (this.state.basketqty===0){
      return(
        <button className="btn-product-basket" onClick={this.incrementBasketQty}>Add To Cart</button>
      )
    } else{
      return(
        <div className="AddDropBtns">
          <div><button className="btn-product-basket" onClick={this.decrementBasketQty}>-</button></div>
          <div><p className="basketQty">{this.state.basketqty}</p></div>
          <div><button className="btn-product-basket" onClick={this.incrementBasketQty}>+</button></div>
        </div>
      )
    }
  }
}

export default AddCartButton
