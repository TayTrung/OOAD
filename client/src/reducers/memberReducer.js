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

    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MEMBERS:
            return {
                ...state,
                members: action.payload,
                loading: false
            };
        case GET_SEARCH_MEMBERS:
            return {
                ...state,
                members: action.payload,
                loading: false
            };
        case DELETE_MEMBER:
            return {
                ...state,
                members: state.members.filter(
                    member => member._id !== action.payload._id
                )
            };
        case ADD_MEMBER:
            return {
                ...state,
                members: [action.payload, ...state.members]
            };
        case MEMBERS_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
