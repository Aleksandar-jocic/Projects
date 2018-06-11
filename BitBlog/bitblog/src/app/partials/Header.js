import React from 'react';
import { Link } from "react-router-dom";

const Header = () => (

    <div id='header'>
        <span>BIT BLOG</span>
        <div>
            <span id='newPostLink'><Link to='/posts/new'>New Post</Link></span>
            <span><Link to='/'>Home</Link></span>
            <span><Link to='/author'>Author</Link></span>
            <span><Link to='/about'>About</Link></span>
        </div>
    </div>
)

export default Header