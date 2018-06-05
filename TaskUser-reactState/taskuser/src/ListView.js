import React, { Component } from 'react';
import GetUser from './apiData';


class ListView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            users: []
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

        return (
            <div>

                {this.state.users.map((userData) => (

                    <div className="personSection">
                        <div id='picDiv'>
                            <img className="thumbPics" src={userData.picture.thumbnail} />
                            <p id="nameFloat">{userData.name.first}</p>
                        </div>

                        <div className="parDiv">
                            <p>email: {this.email(userData.email)}</p>
                            <p>Date Of Birth: {new Date(userData.dob).toDateString()}</p>
                        </div>
                    </div>

                ))}


            </div>

        )
    }

}

export default ListView;
