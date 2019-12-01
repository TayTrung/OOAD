import {
    GET_SEARCH_MEMBERS,
    GET_MEMBERS,
    ADD_MEMBER,
    DELETE_MEMBER,
    GET_MEMBER,
    MEMBERS_LOADING
} from "../actions/types";

const initialState = {
    members: [],
    isLoaded: false,
    response: null,
    type: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MEMBERS:
            return {
                ...state,
                members: action.payload,
                isLoaded: true,
                type: action.type
            };
        case GET_SEARCH_MEMBERS:
            return {
                ...state,
                members: action.payload,
                isLoaded: true
            };
        case DELETE_MEMBER:
            return {
                ...state,
                members: state.members.filter(
                    member => member._id !== action.payload._id
                ),
                type: action.type,
            };
        case ADD_MEMBER:
            return {
                ...state,
                members: [action.payload, ...state.members],
                response: action.response,
                type: action.type,
            };
        case MEMBERS_LOADING:
            return {
                ...state,
                isLoaded: true
            };
        default:
            return state;
    }
}
