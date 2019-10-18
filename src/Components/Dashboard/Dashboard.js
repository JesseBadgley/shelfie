import React, { Component } from 'react';
import Product from '../Product/Product'
import axios from 'axios';


export default class Dashboard extends Component {
    constructor() {
        super ();
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