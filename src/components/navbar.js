import React , { Component } from 'react'
import BasketIcon from './basketIcon'
import SideBar from './sideBar'
import BackDrop from './backDrop'
import './navbar.css'

class Navbar extends Component{

  constructor(props){
    super(props)

    this.state={
      sideDrawerOpen: false
    }
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  render(){
    return(
      <div className="navbar-top">
        <div>
          <SideBar show={this.state.sideDrawerOpen} clickAction={this.drawerToggleClickHandler}/>
          <BackDrop show={this.state.sideDrawerOpen} clickAction={this.drawerToggleClickHandler}/>
          <img onClick={this.drawerToggleClickHandler} className="navbar-logo-normal" src={require('../assets/images/modern_burger.png')} alt=''/>
        </div>
        <div>
          <img className="navbar-logo-brand" src={require('../assets/images/KrazyLogoGreen.png')} alt=''/>
        </div>
        <div>
          <BasketIcon/>
        </div>
      </div>
    )
  }
}

export default Navbar
