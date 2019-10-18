import React, { Component } from 'react';
import Product from '../Product/Product'
import axios from 'axios';


export default class Dashboard extends Component {
    constructor() {
        super ();
        this.state = {
            list: ['apples'],
           
        }
    }


    render() {
        return(
            <div>
                <div>Dashboard</div>
                <Product />
            </div>
        )
    }


}