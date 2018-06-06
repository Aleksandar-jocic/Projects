import React from 'react';

const GetUser = () => {

    const URL = 'https://randomuser.me/api/?results=15';

    return fetch(URL).then((dataList) => {

        return dataList.json()

    })
}

export default GetUser;