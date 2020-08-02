import React from 'react'
import './backDrop.css'

const BackDrop = props =>{
  let backDropClass = "backDropGhost"
  if(props.show){
    backDropClass = "backDrop"
  }
  return(
    <div onClick={props.clickAction} className={backDropClass}></div>  
  )
}

export default BackDrop
