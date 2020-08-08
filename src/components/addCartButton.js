import React, { Component } from 'react'
import './productSection.css'


class AddCartButton extends Component{

  constructor (props){
    super(props)
    this.state = {
      basketqty: 0
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
        <button className="btn-product-basket" onClick={this.incrementBasketQty}><i className="fa fa-plus-circle"></i> Add To Cart</button>
      )
    } else{
      return(
        <div className="AddDropBtns">
          <div><button className="btnCartMinus" onClick={this.decrementBasketQty}><i className="fa fa-minus"></i></button></div>
          <div><p className="basketQty">{this.state.basketqty}</p></div>
          <div><button className="btnCartPlus" onClick={this.incrementBasketQty}><i className="fa fa-plus"></i></button></div>
        </div>
      )
    }
  }
}

export default AddCartButton
