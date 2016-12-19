import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './postsReducer';

export default combineReducers({
    posts,
    routing: routerReducer
})