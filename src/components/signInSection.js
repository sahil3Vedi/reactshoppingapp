import React , { Component }from 'react'
import './navbar.css'

class SignInSection extends Component{

  constructor(props){
    super(props)

    this.state={
      username:'',
      password:''
    }
  }

  handleUsrText = event => {
    this.setState({
      username: event.target.value
    })
  }

  handlePwdText = event => {
    this.setState({
      password: event.target.value
    })
  }

  render(){
    return(
      <div className="signInSection">
        <div className="signInTxt"><p>Sign In</p></div>
        <div className="usernameTxt"><input className="formInputSideNavBar" type='text'  value={this.state.username} onChange={this.handleUsrText} placeholder="Email Id"/></div>
        <div className="passwordTxt"><input className="formInputSideNavBar"type='text'  value={this.state.password} onChange={this.handlePwdText} placeholder="Password"/></div>
        <div className="signInBtnWrapper"><button className="btnSignInSideNavBar" type="submit">SIGN IN</button></div>
      </div>
    )
  }
}

export default SignInSection
