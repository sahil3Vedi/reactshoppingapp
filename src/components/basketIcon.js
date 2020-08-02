import React , { Component } from 'react'
import './navbar.css'

class BasketIcon extends Component{

  constructor(props){
    super(props)
    this.state={
      itemQty: 0
    }
  }

  render() {
    return(
      <div>
        <img className="navbar-logo-normal" src={require('../assets/images/basket_shopping.png')} alt=''/>
        <button className="basket-icon-prompt">{this.state.itemQty}</button>
      </div>
    )
  }
}

export default BasketIcon
