import React, { Component } from 'react'
import axios from 'axios'
import Product from '../Product/Product'

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            list: ['test'],
            selectedProduct: ['none'],
        }
       
        this.refresh = this.refreshInventory.bind(this)
    }
    componentDidMount() {
        axios.get('/api/inventory').then(res => {
            this.setState({ list: res.data })
        })
    }

    deleteProduct(id) {
        axios.delete(`/api/product/${id}`).then(res => {
            console.log('hit')
            this.refreshInventory()
        })
    }
    
    refreshInventory() {
        axios.get('/api/inventory').then(res => {
            this.setState({ list: res.data })
            console.log('SUCCESS!')
        })
    }


    render() {
        return (
            <div>
                {this.state.list.map((el, index) => (
                    <div key={index + 'div'}>
                        <Product
                            refreshInventory={this.props.refreshInventory}
                            key={index}
                            product={el}
                            deleteProduct={this.deleteProduct} />
                        <button key={index + 'button'} onClick={() => this.deleteProduct(el.product_id)}>Delete</button>
                        
                    </div>
                ))}
            </div>
        )
    }
}