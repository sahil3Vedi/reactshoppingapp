import React , { Component } from 'react'
import './searchBar.css'

class Searchbar extends Component{

  constructor(props){
    super(props)

    this.state={
      searchText:''
    }
  }

  handleSearchText = event => {
    this.setState({
      searchText: event.target.value
    })
  }

  render(){
    const {searchText} = this.state
    return(
      <div>
        <input className={`searchBar fontAwesome`} type='text' value={searchText} onChange={this.handleSearchText} placeholder="&#xf002; type to search"/>
      </div>
    )
  }

}

export default Searchbar
