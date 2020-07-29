import React , { Component } from 'react'
import './navbar.css'

class Navbar extends Component{

  render() {
    return(
      <div className="navbar-top">
        <div>
          <img className="navbar-logo-normal" src={require('../assets/images/modern_burger.png')} alt=''/>
        </div>
        <div>
          <img className="navbar-logo-brand" src={require('../assets/images/KrazyLogoGreen.png')} alt=''/>
        </div>
        <div>
          <img className="navbar-logo-normal" src={require('../assets/images/basket_shopping.png')} alt=''/>
        </div>
      </div>
    )
  }
}

export default Navbar
