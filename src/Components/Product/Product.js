
import React, { Component } from 'react'
import axios from 'axios'

export default class Product extends Component {

render() {
    const image_url = this.props.product.image_url
    return (
        <div>
            <div>
            <img src={image_url} alt="stupid thing not working" />
            </div>
            <div>
            <h2>{this.props.product.name}</h2>
            <h4>${this.props.product.price}</h4>
            </div>
            
        </div>
    )
}
}
