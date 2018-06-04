import React, { Component } from 'react';
import PropTypes from 'prop-types';

function email (email) {
    let e = email.split('@');
    e = e[0].slice(0,3).concat('...@').concat(e[1]);
   return e
 };



function UserItem (props) {
    return (
<div className="personSection">
    <div id='picDiv'>
        <img className="medPics" src={props.user.picture.large} />
        <p id="nameFloat">{props.user.name.first}</p>
    </div>

    <div className="parDiv">
        <p>email: {email(props.user.email)}</p>
        <p>Date Of Birth: {new Date(props.user.dob).toDateString()}</p>
    </div>
</div>
)
}
UserItem.propTypes = {

    user: PropTypes.string.isRequired
    
  }
  

export default UserItem;
