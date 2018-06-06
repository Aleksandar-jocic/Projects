import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GetUser from './apiData';
import Grid from './Grid';
import List from './List';
import Search from './searchBox';

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

   

    render() {

        return (

            <div>
                {this.props.users.filter((user)=>{

                    if (this.props.inputText === ''){
                        console.log('true');
                        
                        return true
                    } else {
                        console.log('else');
                        
                        return user.name.first.includes(this.props.inputText)
                    } 

                }).map((userData) => (

                    this.props.view ? <Grid userData={userData} /> : <List userData={userData}
                    />

                ))}
            </div>
        )
    }
};

// UserItem.propTypes = {

//     user: PropTypes.string.isRequired

// }


export default Content;
