import React, { Component } from 'react'
import AddCartButton from './addCartButton'
import './productSection.css'

class ProductPanel extends Component{

  constructor (props){
    super(props)
    this.state={
      bgcolor: this.props.product.bg_color,
      fruitname: this.props.product.product_name,
      fruitnative: this.props.product.native_name,
      imagesrc: this.props.product.product_image,
      price: this.props.product.price,
      product_id: this.props.product.product_id,
      qwt: this.props.product.basket_qty,
      shadow: this.props.product.shadow_color
    }
  }

  render() {
    console.log(this.state.imagesrc)
    return (
      <div className = "productPanel" style={{backgroundColor: this.state.bgcolor, boxShadow: this.state.shadow}}>
        <div>
          <img className="product-basket-image" src={this.state.imagesrc} alt=''/>
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
          <AddCartButton/>
        </div>
      </div>
    )
  }

}

export default ProductPanel
