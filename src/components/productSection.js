import React , { Component } from 'react'
import ProductPanel from './productPanel'
import './productSection.css'

class ProductSection extends Component{
  constructor(props){
    super(props)
    this.state = {
      data: {
        0: {
          'product_id': 1,
          'fruitname': 'Beetroot',
          'fruitnative': 'બીટ',
          'bgcolor':'#f08585',
          'shadow':'0px 10px 15px #f0858588',
          'qwt':'250gm',
          'price': '20',
          'qty': '0',
          'imagesrc': 'beet_veg'
        },
        1: {
          'product_id': 2,
          'fruitname': 'Ginger',
          'fruitnative': 'આદુ',
          'bgcolor':'#ffd89c',
          'shadow':'0px 10px 15px #ffd89c88',
          'qwt':'250gm',
          'price': '30',
          'qty': '0',
          'imagesrc': 'ginger_veg'
        },
        2: {
          'product_id': 3,
          'fruitname': 'Brinjal',
          'fruitnative': 'રીંગણ',
          'bgcolor':'#d18cd2',
          'shadow':'0px 10px 15px #d18cd288',
          'qwt':'250gm',
          'price': '10',
          'qty': '0',
          'imagesrc': 'brinjal_veg'
        },
        3: {
          'product_id': 4,
          'fruitname': 'Vaalor',
          'fruitnative': 'વાલોર',
          'bgcolor':'#9fccad',
          'shadow':'0px 10px 15px #9fccad88',
          'qwt':'250gm',
          'price': '25',
          'qty': '0',
          'imagesrc': 'valor_veg'
        },
        4: {
          'product_id': 5,
          'fruitname': 'Lemon',
          'fruitnative': 'લીંબુ',
          'bgcolor':'#ffd89c',
          'shadow':'0px 10px 15px #ffd89c88',
          'qwt':'250gm',
          'price': '25',
          'qty': '0',
          'imagesrc': 'lemon_veg'
        },
        5: {
          'product_id': 6,
          'fruitname': 'Carrot',
          'fruitnative': 'ગાજર',
          'bgcolor':'#ffad98',
          'shadow':'0px 10px 15px #ffad9888',
          'qwt':'250gm',
          'price': '25',
          'qty': '0',
          'imagesrc': 'carrot_veg'
        }
      }
    }
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
