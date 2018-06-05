import React, { Component } from 'react';

const email = (email) => {
    let e = email.split('@');
    e = e[0].slice(0, 3).concat('...@').concat(e[1]);
    return e
}

const Grid = (props) => (

    <div className="personSection">
        <div id='picDiv'>
            <img className="medPics" src={props.userData.picture.large} />
            <p id="nameFloat">{props.userData.name.first}</p>
        </div>

        <div className="parDiv">
            <p>email: {email(props.userData.email)}</p>
            <p>Date Of Birth: {new Date(props.userData.dob).toDateString()}</p>
        </div>
    </div>
)

export default Grid;