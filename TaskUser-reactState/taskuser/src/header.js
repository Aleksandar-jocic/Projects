import React, { Component } from 'react';

const Header = (props) => (
    <div id="header">
        <h1>BIT People</h1>
        <ul>
            <li>About</li>
            <li><i className="fas fa-redo-alt" onClick={props.refresh}></i></li>
            <li>{props.view ? <i className="fas fa-th-list" onClick={props.handler}></i> : <i className="fas fa-th" onClick={props.handler}></i>}</li>
        </ul>
    </div>
)
export default Header;

