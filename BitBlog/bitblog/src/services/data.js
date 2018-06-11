import React from 'react';
import { urlMain } from '../shared/utilities';
import DataConstructor from '../entities/DataConstructor'

class PostData {

    getPosts() {

        return fetch(`${urlMain}posts/`).then((response) => {
            return response.json()
        }).then(data => {

            return data.map(post => {
                return new DataConstructor(post.id, post.title, post.body, post.userId)
            })

        })
    }

    getSinglePost(id) {

        return fetch(`${urlMain}posts/${id}`).then((response) => {

            return response.json()

        }).then((singlePostObj) => {

            return singlePostObj
        })
    }

    getUsers() {

        return fetch(`${urlMain}users/`).then((response) => {

            return response.json()

        }).then((usersData) => {

            return usersData
        })

    }

    getSingleUser(userId) {

        return fetch(`${urlMain}users/${userId}`).then((response) => {

            return response.json()

        }).then((singleUserObj) => {

            return singleUserObj
        })
    }

    getPostsByUserId(userId) {

        return fetch(`${urlMain}posts?userId=${userId}`).then((response) => {

            return response.json()
        }).then((postById) => {
            return postById
        })
    }


    uploadingNewPostToServer(titleValue, textValue) {

        fetch(`${urlMain}posts`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: titleValue,
                text: textValue,
            })
        })
    }
}

export default new PostData();