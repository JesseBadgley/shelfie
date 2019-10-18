import React, { Component } from 'react'
import axios from 'axios'


export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: null,
            image_url: 'https://icon-library.net/images/icon-product/icon-product-11.jpg',
            price: null,
            selectedProductID: null,
            selectedProduct: [],
            buttonSave: true,
        }
        this.cancelReset = this.cancelReset.bind(this)
    }
    componentDidMount() {
        if (isNaN(this.props.match.params.id)) { console.log('true') }
        else {
            axios.get(`/api/product/${this.props.match.params.id}`).then(res => {
                console.log(res.data)
                const product = res.data
                this.setState({
                    name: product[0].name,
                    price: product[0].price,
                    image_url: product[0].image_url,
                    selectedProductID: this.props.match.params.id,
                    buttonSave: false,

                })
            })
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps == this.props) {
            console.log('worked!')
        }
        else {
           this.cancelReset()
        console.log('new state')
        }
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value })
        // console.log(`${this.state.name}`)
    }
    handlePriceChange(e) {
        this.setState({ price: e.target.value })
        // console.log(this.state.price)
    }
    handleImageChange(e) {
        this.setState({ image_url: e.target.value })
        // console.log(this.state.image)
    }
    cancelReset() {
        this.setState({
            name: 'Enter Name',
            image_url: 'https://icon-library.net/images/icon-product/icon-product-11.jpg',
            price: 0,
            buttonSave: true,
            selectedProductID: null,
            selectedProduct: null
        })
        console.log('reset state')
    }
    postProduct(body) {
        axios.post('api/product', body).then(() => {
          
            this.cancelReset()
        })
            .catch(error => {
                alert('this thing didnt work')
            })
    }
 

    render() {
        return (
            <div>
                <img src={this.state.image_url} alt="meh" />
                Name <input value={this.state.name} onChange={e => this.handleNameChange(e)} />
                Price <input value={this.state.price} onChange={e => this.handlePriceChange(e)} />
                Image <input value={this.state.image_url} onChange={e => this.handleImageChange(e)} />
                <button onClick={() => this.cancelReset()}>Cancel</button>
               
                   

            </div>
        )
    }
}