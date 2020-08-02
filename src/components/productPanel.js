import React, { Component } from 'react'
import AddCartButton from './addCartButton'
import './productSection.css'

class ProductPanel extends Component{

  constructor (props){
    super(props)
    this.state={
      bgcolor: this.props.product.bgcolor,
      fruitname: this.props.product.fruitname,
      fruitnative: this.props.product.fruitnative,
      imagesrc: this.props.product.imagesrc,
      price: this.props.product.price,
      product_id: this.props.product.product_id,
      qty: this.props.product.qty,
      qwt: this.props.product.qwt,
      shadow: this.props.product.shadow,
      stock: this.props.product.stock,
      basketqty: this.props.product.basketqty
    }
  }

  render() {
    var basket = this.state.basketqty
    return (
      <div className = "productPanel" style={{backgroundColor: this.state.bgcolor, boxShadow: this.state.shadow}}>
        <div>
          <img className="product-basket-image" src={require(`../assets/images/${this.state.imagesrc}.png`)} alt=''/>
        </div>
        <div className="product-basket-information">
          <div className="product-names-qty">
            <div><p className="product-name">{this.state.fruitname}</p></div>
            <div><p className="product-native">{this.state.fruitnative}</p></div>
            <div><p className="product-qty">{this.state.qwt}</p></div>
          </div>
          <div className="product-price">
            <div></div>
            <div>&#8377;{this.state.price}</div>
          </div>
        </div>
        <div>
          <AddCartButton basketqty={basket}/>
        </div>
      </div>
    )
  }

}

export default ProductPanel
