import React from 'react';
import { urlMain } from '../shared/utilities';
import DataConstructor from '../entities/DataConstructor'

class PostData {

    getPost() {

        return fetch(`${urlMain}posts/`).then((response) => {
                return response.json()
            }).then(data => {
                
                return data.map(post => {
                    return new DataConstructor(post.id, post.title, post.body)
                })

            })
    }
}

export default new PostData();