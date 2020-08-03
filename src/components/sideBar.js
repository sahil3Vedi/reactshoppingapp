import React from 'react'
import SignInSection from './signInSection'
import SignUpSection from './signUpSection'
import './navbar.css'

const SideBar = props =>{
  let drawerClasses = "sideNavBar"
  if (props.show){
    drawerClasses = "sideNavBar open"
  }
  let display
  if (props.view === "signInView"){
    display = <SignInSection changeSection={props.changeSection}/>
  } else {
    display = <SignUpSection changeSection={props.changeSection}/>
  }
  return(
    <div className={drawerClasses}>
      <div className="crossContainer">
        <div><i onClick={props.clickAction} className="fa fa-times sideNavBack" aria-hidden="true"></i></div>
        <div></div>
      </div>
      {display}
    </div>
  )
}

export default SideBar
