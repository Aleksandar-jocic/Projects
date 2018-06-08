import React, { Component } from 'react';
// import usersData from '../services/data';
import Footer from './footer';
import Header from './header';
import Content from './Content';
import './App.css';
import GetUser from './apiData';
import Search from './searchBox';
import {Switch, Route} from "react-router-dom";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentView: false,
      refresh: false,
      users: [],
      inputValue: '',
    }
    this.handleHeaderClick = this.handleHeaderClick.bind(this);
    this.refreshPage = this.refreshPage.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = () => {
    GetUser().then((data) => {
      this.setState({
        users: data.results
      })
    })
  }

  refreshPage() {
    this.loadData(); 
  }

  handleHeaderClick() {
    console.log('SSS');

    this.setState((prevState) => {
      return {
        currentView: !prevState.currentView,

      }
    })
  }
  
  inputHandler(event) {    
 
    this.setState({
      inputValue: event.target.value,
    })

  }

  render() {
    return (
      <div id='container'>
        <div><Header handler={this.handleHeaderClick} view={this.state.currentView} refresh={this.refreshPage} /></div>

{/* <Switch> */}
    {/* <Route exact path='/' component={}> */}
{/* </Switch> */}

        {/* <div><Search inputHandler={this.inputHandler} /></div> */}

        <div><Content view={this.state.currentView} users={this.state.users} 
        inputText={this.state.inputValue}/></div>



        <div><Footer /></div>
      </div>
    )
  }
}


export default App
