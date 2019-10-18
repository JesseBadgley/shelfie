import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';


export default class App extends Component {
  render(){
    return (
      <div>
        <Dashboard />
        <Form />
        <Header />
      </div>
    );
  }
}