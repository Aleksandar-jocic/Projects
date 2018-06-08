import React from 'react';
import PostData from '../../services/data';
import { Link } from "react-router-dom";



class Home extends React.Component {

    constructor(props) {
        super(props),
            this.state = {
                posts: [],
            }
    }

    acquirePosts = () => {
        PostData.getPosts().then((postsData) => {
       

            this.setState({
                posts: postsData
            })
        })

    }

    componentDidMount() {

        this.acquirePosts()

    }

    render() {
        return (

            <div id='home'>

                <h1>POSTS</h1>

                {this.state.posts.map(post => (

                    <div>
                        <div>
                            <div>
                                <h1><Link to={`/SinglePost/${post.id}`}>{post.title}</Link></h1>
                                <p>{post.content}</p>
                            </div>
                            <hr />
                        </div>
                    </div>


                ))}


            </div>

        )
    }
}

export default Home