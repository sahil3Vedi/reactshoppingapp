import React from 'react'
import './navbar.css'

const SideBar = props =>{
  let drawerClasses = "sideNavBar"
  if (props.show){
    drawerClasses = "sideNavBar open"
  }
  return(
    <div className={drawerClasses}>
      <div className="crossContainer">
        <div><i onClick={props.clickAction} className="fa fa-times sideNavBack" aria-hidden="true"></i></div>
        <div></div>
      </div>
    </div>
  )
}

export default SideBar
