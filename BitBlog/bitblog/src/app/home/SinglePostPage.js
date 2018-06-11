import React, { Component } from 'react';
import PostData from '../../services/data';
import { Link } from "react-router-dom";


class SinglePost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            singlePostObj: null,
            postsByUserId: [],
            singleUserObj: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.acquireSinglePost(nextProps.match.params.id);
    }


    acquireSinglePost(id) {

        PostData.getSinglePost(id).then(singlePostObj => {



            this.setState({
                singlePostObj: singlePostObj,

            })
            this.postsByUserId(singlePostObj.userId);
            this.acquireSingleUser(singlePostObj.userId);
        })
    }



    acquireSingleUser(userId) {

        PostData.getSingleUser(userId).then(singleUserObj => {
            console.log(singleUserObj);

            this.setState({
                singleUserObj: singleUserObj
            })
            
            
        })
    }





    componentDidMount() {

        this.acquireSinglePost(this.props.match.params.id);
    }




    postsByUserId(userId) {

        PostData.getPostsByUserId(userId).then((postsByUserId) => {

            this.setState({
                postsByUserId: postsByUserId
            })
        })
    }




    render() {
        return (

            (this.state.singlePostObj === null) ? ('Please wait') : (

                <div id='SinglePost'>

                    <h3>{this.state.singlePostObj.title}</h3>

                    <span><Link to={`/singleAuthor/${this.state.singlePostObj.userId}`}>{this.state.singleUserObj.name}</Link></span>

                    <p>{this.state.singlePostObj.body}</p>

                    <hr />

                    <h4>few more from the same author</h4>

                    <ul>

                        {this.state.postsByUserId.map(post => (

                            <li><Link to={`/SinglePost/${post.id}`}>{post.title}</Link></li>

                        ))}

                    </ul>

                </div>
            )

        )
    }
}
export default SinglePost