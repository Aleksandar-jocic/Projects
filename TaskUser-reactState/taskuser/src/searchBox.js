import React, { Component } from 'react';
import GetUser from './apiData';



class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div className='inputText'>
                <i class="fas fa-search"></i><input id='inputText' type='text' placeholder="Search users" onChange={this.props.inputHandler} />
            </div>
        )
    }




}

export default Search;