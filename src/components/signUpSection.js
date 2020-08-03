import React , { Component }from 'react'
import './navbar.css'

class SignUpSection extends Component{

  constructor(props){
    super(props)

    this.state={
      username:'',
      password:'',
      confirmpassword: '',
      toggleview: props.changeSection
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

  handleCnfPwdText = event => {
    this.setState({
      confirmpassword: event.target.value
    })
  }

  render(){
    return(
      <div className="signUpSection">
        <div className="signInTxt"><p>Sign Up</p></div>
        <div className="usernameTxt"><input className="formInputSideNavBar" type='text'  value={this.state.username} onChange={this.handleUsrText} placeholder="Email Id"/></div>
        <div className="passwordTxt"><input className="formInputSideNavBar"type='text'  value={this.state.password} onChange={this.handlePwdText} placeholder="Password"/></div>
        <div className="passwordTxt"><input className="formInputSideNavBar"type='text'  value={this.state.confirmpassword} onChange={this.handleCnfPwdText} placeholder="Confirm Password"/></div>
        <div className="signInBtnWrapper"><button className="btnSignInSideNavBar" type="submit">SIGN UP</button></div>
        <div><p>Already have an account? <span className="changeSection" onClick={this.state.toggleview}>Sign In</span></p></div>
      </div>
    )
  }
}

export default SignUpSection
