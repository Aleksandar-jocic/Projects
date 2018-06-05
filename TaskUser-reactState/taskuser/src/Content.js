import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GetUser from './apiData';
import Grid from './Grid';
import List from './List';




class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],

        }
    }


    componentDidMount() {

        GetUser().then((data) => {
            this.setState({
                users: data.results

            })
        })
    }
    render() {
        // Grid or List

        return (

            <div>
                {this.state.users.map((userData) => (

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
