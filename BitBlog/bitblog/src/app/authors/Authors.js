import React from 'react';
import PostData from '../../services/data';
import { Link } from "react-router-dom";


class Author extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            postsByUserId: []
        }
    }

    acquireUsers() {

        PostData.getUsers().then((usersData) => {
            console.log(usersData);

            this.setState({
                users: usersData
            })

        })
    }

    componentDidMount() {

        this.acquireUsers();
    }

  

    render() {
        return (
            <div id="authors">

                <h1>{`AUTHORS (${this.state.users.length})`}</h1>

                {this.state.users.map(user => (

                    <div>

                        <h3><Link to={`/singleAuthor/${user.id}`}>{`${user.name} (10 - posts)`}</Link></h3>

                    </div>

                ))}

            </div>
        )
    }
}

export default Author