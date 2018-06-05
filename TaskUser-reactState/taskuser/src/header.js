import React, { Component } from 'react';

const Header = (props) => (
    <div id="header">
        <h1>BIT People</h1>
        <ul>
            <li>About</li>
            <li><i className="fas fa-redo-alt"></i></li>
            <li><i className="fas fa-th"  onClick={props.handler}></i></li>           
        </ul>
            
    </div>
)
export default Header;