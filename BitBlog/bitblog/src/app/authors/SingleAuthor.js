import React, { Component } from 'react';
import PostData from '../../services/data';
import { Link } from "react-router-dom";


class SingleAuthor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            singleUserObj: null,
        }
    }

    acquireSingleUser() {

        PostData.getSingleUser(this.props.match.params.userId).then(singleUserObj => {

            this.setState({
                singleUserObj: singleUserObj
            })
        })
    }

    componentDidMount() {
        this.acquireSingleUser()

    }

    



    render() {

        return (

            (this.state.singleUserObj === null) ? ('Please wait') : (

                <div id='singleAuthor'>
                    <div>

                        <span><Link to="/Author">{` <All authors`}</Link></span>
                        <h1>SINGLE AUTHOR</h1>

                    </div>

                    <div>
                        <img />

                        <h2>Author details</h2>
                        <h2>{this.state.singleUserObj.name}</h2>
                        
                        <p>{`username: ${this.state.singleUserObj.username}`}</p>
                        <p>{`email: ${this.state.singleUserObj.email}`}</p>
                        <p>{`phone: ${this.state.singleUserObj.phone}`}</p>

                    </div>
                    <hr />
                    <div>
                        <h2>Address</h2>
                        <p>{`street: ${this.state.singleUserObj.address.street}`}</p>
                        <p>{`city: ${this.state.singleUserObj.address.city}`}</p>
                        <p>{`zipcode: ${this.state.singleUserObj.address.zipcode}`}</p>
                    </div>
                    <hr />
                    <div>
                        <h2>Company</h2>
                        <p>{`name: ${this.state.singleUserObj.company.name}`}</p>
                        <p>{`slogan: ${this.state.singleUserObj.company.catchPhrase}`}</p>
                    </div>
                </div>
            )
        )
    }
}
export default SingleAuthor