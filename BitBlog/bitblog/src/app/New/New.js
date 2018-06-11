import React from 'react';
import PostData from '../../services/data';
import { Redirect } from "react-router-dom";



class New extends React.Component {

    constructor(props) {

        super(props),

            this.state = {
                title: '',
                text: '',
            }
            this.dataHandler = this.dataHandler.bind(this);
            this.textHandler = this.textHandler.bind(this);
            this.titleHandler = this.titleHandler.bind(this);
            this.cancelHandler = this.cancelHandler.bind(this);   
    }

    // data upload --->

    dataHandler() {

        PostData.uploadingNewPostToServer(this.state.title, this.state.text)

    }
    textHandler(event) {
        console.log(this.state.text);
        
        this.setState({
            text: event.target.value
        })
    }
    titleHandler(event){

        this.setState({
            title: event.target.value
        })
    }
    cancelHandler(event){

        window.location.href = '/'

    }

    // <--- data upload
   


    render() {

        return (

            <div id="newpost">
                <h2>NEW POST</h2>
                <div>
                    <div>
                        <p>Title</p>
                        <input type='text' placeholder='title...' onChange={this.titleHandler}/>
                    </div>
                    <div>
                    <p>Title</p>
                    <textarea placeholder='post here...' onChange={this.textHandler}></textarea>                        
                    </div>
                    <div id='buttonsDiv'>

                        <input type='button' value='Cancel' onClick={this.cancelHandler}/>
                        <input type='submit' onClick={this.dataHandler}/>
                        
                    </div>  
                </div>
            </div>
        )
    }
}

export default New