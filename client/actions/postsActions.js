import axios from 'axios';

export function getPosts() {
    return function(dispatch) {
        dispatch({type: 'FETCH_POSTS_FULFILLED', payload: [{_id: 1, title: "Title 1", content: "Content 1"}, {_id: 2, title: "Title 2", content: "Content 2"}]});
    }
};
