import React, { Component } from 'react';
import usersData from './data';
import logo from './logo.svg';
import footer from './Footer/footer';
import Header from './Header/header.js';
import UserItem from './ItemList';
import './App.css';




const App = (props) => {

  return (

    <div id='container'>
      <div><Header /></div>

      {usersData.map((a) => (

        <UserItem user={a}/>

      ))}
      <div>{footer}</div>
    </div>
  )
}


export default App
