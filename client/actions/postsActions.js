import axios from 'axios';

export function getPosts() {
    return function(dispatch) {
        axios.get('/api/posts')
        .then((response) => {
            dispatch({type: 'FETCH_POSTS_FULFILLED', payload: response.data});    
        })
        .catch((err) => {
            dispatch({type: "FETCH_POSTS_REJECTED", payload: err});
        });
    }
};
