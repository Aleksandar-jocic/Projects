import React, { Component } from 'react';

const email = (email) => {
    let e = email.split('@');
    e = e[0].slice(0, 3).concat('...@').concat(e[1]);
    return e
}

const List = (props) => {


    //fix it
    let femaleOrSheMale = props.userData.gender === "female" ? "personSectionFemale" : "personSection";
    return (

            <div className="listDiv">
                <img className="thumbPics" src={props.userData.picture.thumbnail} />
                <div>
                    <p>{props.userData.name.first}</p>
                    <p>{email(props.userData.email)}</p>
                    <p>{new Date(props.userData.dob).toDateString()}</p>
                </div>

            </div>

    )
}

export default List;



