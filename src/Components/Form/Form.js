import React, { Component } from 'react';
import axios from 'axios';


export default class Form extends Component {
    constructor() {
        super ()
        this.state = {
            name: null,
            image_url: 'https://icon-library.net/images/icon-product/icon-product-11.jpg',
            price: null,
            
        }
    }

    
    handleNameChange(e) {
        this.setState({name: e.target.value})
        console.log(`${this.state.name}`)
    }

    handlePriceChange(e) {
        this.setState({price: e.target.value})
        console.log(`${this.state.price}`)
    }

    handleImageChange(e) {
        this.setState({image_url: e.target.value})
        console.log(`${this.state.image_url}`)
    }

    cancelReset() {
        this.setState({
            name: 'Enter Name',
            image_url: 'https://icon-library.net/images/icon-product/icon-product-11.jpg',
            price: 0,
        })
    }


    render() {
        return(
            <div>
               Name <input value={this.state.name} onChange={ e => this.handleNameChange(e)} />
               Price <input value={this.state.price} onChange={ e => this.handlePriceChange(e)} />
               Image <input value={this.state.image_url} onChange={ e => this.handleImageChange(e)} />
                
                <button onClick={() => this.cancelReset()}>Cancel</button>

                <button onClick={() => this.postProduct(this.state)}>Add To Inventory</button>
                
            </div>
        )
    }


}