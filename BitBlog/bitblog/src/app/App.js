import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Data from '../services/data';
import { Switch, Route } from "react-router-dom";

import Header from './partials/Header';
import Footer from './partials/Footer';

import Home from './home/Home';
import Author from './authors/Authors';
import About from './about/AboutPage';


import SinglePostPage from './home/SinglePostPage';
import SingleAuthor from './authors/SingleAuthor';




class App extends Component {
  render() {
    return (
      <div>
        <div><Header /></div>
        
        <Switch>

          <Route exact path='/' component={Home} />

          <Route  path='/SinglePost/:id' component={SinglePostPage} />
          
          <Route  path='/Author' component={Author} />
          <Route  path='/singleAuthor/:userId' component={SingleAuthor} />

          <Route  path='/About' component={About} />  


        </Switch>

        <div><Footer /></div>
        

      </div>
    );
  }
}

export default App;
