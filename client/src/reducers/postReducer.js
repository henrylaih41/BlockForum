import {
    GET_POSTS,
    ADD_POST,
    LIKE_POST,
    DELETE_POST,
    SELECT_POST,
    POSTS_LOADING
} from '../actions/types';

const initialState = {
    selected: null,
    posts: [],
    loading: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            };
        case ADD_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(POST => POST.id !== action.payload)
            };
        case LIKE_POST:
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post.id === action.payload.id)
                        return action.payload
                    else
                        return post
                })
            };
        case SELECT_POST:
            return {
                ...state,
                selected: action.payload
            }
        case POSTS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
};