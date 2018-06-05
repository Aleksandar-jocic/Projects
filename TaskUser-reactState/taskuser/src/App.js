import React, { Component } from 'react';
// import usersData from '../services/data';
import Footer from './footer';
import Header from './header';
import Content from './Content';
import './App.css';
import GetUser from './apiData';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentView: false,
    }
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleHeaderClick() {
    console.log('SSS');

    this.setState((prevState) => {
      return {
        currentView: !prevState.currentView
      }
    })
  }

  render() {
    return (
      <div id='container'>
        <div><Header handler={this.handleHeaderClick} /></div>

        <div><Content view={this.state.currentView} /></div>

        <div><Footer /></div>
      </div>
    )
  }
}


export default App
