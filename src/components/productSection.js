import React , { Component } from 'react'
import ProductPanel from './productPanel'
import $ from 'jquery'
import './productSection.css'

const products_url = 'https://polar-wildwood-25995.herokuapp.com/api/'
var products
$.getJSON(products_url, function(data) {
    products = data
    console.log(products)
});

class ProductSection extends Component{

  constructor(props){
    super(props)

    this.state={
      data: {}
    }
  }

  componentDidMount() {
    fetch(products_url)
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  }

  render(){
    const {data} = this.state
    var elementArray = []
    for  (var product in data){
      var productInstance = data[product]
      elementArray.push(<ProductPanel product={productInstance} key={productInstance.product_id} />)
    }
    return(
      <div className = {`productSection`}>
        {elementArray}
      </div>
    )
  }

}

export default ProductSection
